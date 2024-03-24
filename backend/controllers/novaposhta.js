const { ctrlWrapper } = require("../decorators");
const { getNovaPoshtaCities } = require("../helpers/getNovaPoshtaCities");

const fetchNovaPoshtaCities = async (req, res) => {
  const cities = await getNovaPoshtaCities();
  res.status(200).json({ cities });
};

module.exports = {
  fetchNovaPoshtaCities: ctrlWrapper(fetchNovaPoshtaCities),
};
