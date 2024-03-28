const ctrlWrapper = require("../../../decorators/ctrlWrapper");
const { HttpError, formatBirthDay } = require("../../../helpers");
const { Profile } = require("../../../models/profile");
const { User } = require("../../../models/user");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const { sendEmail } = require("../../../servises/emailServise/emailServise");
const {
  getActivateNewslatter,
  getSubscribNewsletter,
} = require("../../../utils/emailTemplates");
const { Newsletter } = require("../../../models/newsletter");
const { BASE_URL } = process.env;

const getProfile = async (req, res) => {
  const { id } = req.user;

  let profile = await Profile.findOne({ owner: id });
  if (!profile) {
    profile = await Profile.create({ owner: id });
  }
  const data = await Profile.findOne({ owner: id }).populate(
    "owner",
    "name surname bookClub birthDay phone email"
  );
  const { owner, newsletter } = data;
  res.status(200).json({ owner, newsletter });
};

const editProfile = async (req, res) => {
  const {
    name,
    surname,
    email,
    phone,
    birthDay,
    oldPassword,
    newPassword,
    confirmNewPassword,
  } = req.body;
  const { id } = req.user;
  const user = await User.findById(id);
  if (!user) {
    throw HttpError(404, "User does not exist");
  }
  if (oldPassword && newPassword) {
    const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordMatch) {
      throw HttpError(400, "Old password is incorrect");
    }
    if (oldPassword === newPassword) {
      throw HttpError(
        409,
        "New password is equal old password. Add new password"
      );
    }
    if (newPassword !== confirmNewPassword) {
      throw HttpError(400, "Password does not match ");
    }
    user.password = newPassword;
    await user.save();
    res.status(200).json({ message: "Password changed success" });
  }
  if (birthDay) {
    const formatedBirthDay = formatBirthDay(birthDay);
    user.birthDay = formatedBirthDay;
    await user.save();
  }
  const newUserData = {
    name,
    surname,
    email,
    phone,
  };
  await User.findByIdAndUpdate(id, newUserData, {
    new: true,
  });
  const data = await Profile.findOne({ owner: id }).populate(
    "owner",
    "name surname bookClub birthDay phone email "
  );
  const { owner, newsletter } = data;
  res.status(200).json({ owner, newsletter });
};

const newsletter = async (req, res) => {
  const { id } = req.user;
  const profile = await Profile.findOne({ owner: id });
  if (!profile) {
    throw HttpError(404, "User not found");
  }
  const activateNewsletterToken = crypto.randomBytes(32).toString("hex");
  profile.activateNewsletterToken = activateNewsletterToken;
  await profile.save();

  const user = await User.findById(id);
  const activateNewsletterUrl = `${BASE_URL}/api/profile/newsletter/activate/${activateNewsletterToken}`;
  const message = getActivateNewslatter(user?.name, activateNewsletterUrl);

  try {
    await sendEmail({
      email: user.email,
      subject: "Активація підписки на розсилку новин",
      message,
    });
    res.status(200).json({
      message: `Newslatter activation instruction was sent to your email: ${user.email}!`,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const activateNewsleter = async (req, res) => {
  const { activateToken } = req.params;
  const profile = await Profile.findOne({
    activateNewsletterToken: activateToken,
  });
  if (!profile) {
    throw HttpError(404, "User not found");
  }
  if (profile.newsletter === false) {
    profile.newsletter = true;
    profile.activateNewsletterToken = "";
  } else {
    res
      .status(409)
      .json({ message: "Your newsletter subscription already activated" });
  }

  profile.activateNewsletterToken = undefined;
  profile.save();
  res.status(200).json({
    message: "Newsletter activate success",
  });
};
const deactivateNewslette = async (req, res) => {
  const { id } = req.user;
  const profile = await Profile.findOne({ owner: id });
  if (!profile) {
    throw HttpError(404, "User not found");
  }
  if (profile.newsletter === true) {
    profile.newsletter = false;
  } else {
    res.status(409).json({ message: "Newsletter already deactivated" });
  }
  profile.save();
  res.status(200).json({ message: "Newsletter deactivate success" });
};
const subscribe = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw HttpError(400, "Please enter email");
  }

  const emailExist = await Newsletter.findOne({ email });
  if (emailExist) {
    throw HttpError(
      409,
      "Subscription letter has already sent. Check your email"
    );
  }

  const subscribeNewsletterToken = crypto.randomBytes(32).toString("hex");
  const unsubscribeNewsletterToken = crypto.randomBytes(20).toString("hex");
  const newsletter = await Newsletter.create({
    email,
    subscribeToken: subscribeNewsletterToken,
    unsubscribeToken: unsubscribeNewsletterToken,
  });
  const subscribeNewsletterUrl = `${BASE_URL}/api/newsletter/subscribe/${subscribeNewsletterToken}`;
  const unsubscribeNewsletterUrl = `${BASE_URL}/api/newsletter/unsubscribe/${unsubscribeNewsletterToken}`;
  const message = getSubscribNewsletter(
    newsletter?.email,
    subscribeNewsletterUrl,
    unsubscribeNewsletterUrl
  );

  try {
    await sendEmail({
      email: newsletter.email,
      subject: "Активація підписки на розсилку новин",
      message,
    });
    res.status(200).json({
      message: `Newslatter subscription instruction was sent to your email: ${newsletter.email}!`,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const activateSubscription = async (req, res) => {
  const { subscribeToken } = req.params;
  const newsletter = await Newsletter.findOne({
    subscribeToken,
  });
  if (!newsletter) {
    throw HttpError(404, "User not found");
  }
  if (newsletter.subscribe === false) {
    newsletter.subscribe = true;
    newsletter.subscribeToken = "";
  } else {
    res
      .status(409)
      .json({ message: "Your newsletter subscription already activated" });
  }
  newsletter.save();
  res.status(200).json({
    message: "Subscription for newsletter activate success",
  });
};
const unsubscribe = async (req, res) => {
  const { unsubscribeToken } = req.params;
  const newsletter = await Newsletter.findOne({
    unsubscribeToken,
  });
  
  if (!newsletter) {
    throw HttpError(404, "User not found");
  }
  if (newsletter.subscribe === true) {
    newsletter.subscribe = false;
    newsletter.unsubscribeToken = "";
  } else {
    res
      .status(409)
      .json({ message: "Your already unsubscribed from newsletter" });
  }
  newsletter.save();

  res.status(200).json({
    message: "You unsubscribe from newsletter success",
  });
};
module.exports = {
  getProfile: ctrlWrapper(getProfile),
  editProfile: ctrlWrapper(editProfile),
  newsletter: ctrlWrapper(newsletter),
  activateNewsleter: ctrlWrapper(activateNewsleter),
  deactivateNewslette: ctrlWrapper(deactivateNewslette),
  subscribe: ctrlWrapper(subscribe),
  activateSubscription: ctrlWrapper(activateSubscription),
  unsubscribe: ctrlWrapper(unsubscribe),
};
