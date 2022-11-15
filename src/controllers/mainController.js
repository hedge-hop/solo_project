const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');
// const { Party } = require('../../db/models');

const renderMain = async (req, res) => {
  // const user = req.session?.user;
  // const UserID = req.session?.UserID;
  try {
    renderTemplate(Main, {}, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderMain;
