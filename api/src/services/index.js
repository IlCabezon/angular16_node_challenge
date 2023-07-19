// constants
const { getUserUrl } = require("../constants/urls.js");

const getNAmountOfUsers = async (n) => {
  const response = await fetch(`${getUserUrl}?results=${n}`);
  const users = await response.json();

  return users;
};

const getGenderPercentage = (items = []) => {
  const { male, female } = items.reduce(
    (prev, curr) => {
      prev[curr.gender] += 1;
      return prev;
    },
    {
      male: 0,
      female: 0,
    }
  );

  const malePercentage = parseFloat(((male / items.length) * 100).toFixed(2));
  const femalePercentage = parseFloat(
    ((female / items.length) * 100).toFixed(2)
  );

  return { male: malePercentage, female: femalePercentage };
};

module.exports = {
  getNAmountOfUsers,
  getGenderPercentage,
};
