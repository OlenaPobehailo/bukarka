const formatBirthDay = (date) => {
  const incomingDate = new Date(date);
  const dateOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const UADate = new Intl.DateTimeFormat("ua", dateOptions);
  return UADate.format(incomingDate);
};
module.exports = formatBirthDay;
