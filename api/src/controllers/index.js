// services
const { getNAmountOfUsers, getGenderPercentage } = require("../services");

const getUsers = async (req, res) => {
  const { results: amount = 20 } = req.query;

  try {
    const { results } = await getNAmountOfUsers(amount);
    const genderPercentage = getGenderPercentage(results)

    return res.status(200).json({
      message: "Users fetched successfully",
      genderPercentage,
      results,
    });
  } catch (err) {
    return res.status(400).json({ err });
  }
};

module.exports = {
  getUsers,
};
