const renderTemplate = require('../lib/renderTemplate');
const UserPage = require('../views/UserPage');
// const { Party } = require('../../db/models');

const renderUserAcc = async (req, res) => {
  const user = req.session?.user;
  // const UserID = req.session?.UserID;
  try {
    renderTemplate(UserPage, { user }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderUserAcc;
