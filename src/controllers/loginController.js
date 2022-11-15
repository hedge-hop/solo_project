const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');
// const { Party } = require('../../db/models');

const renderLogin = async (req, res) => {
  // const user = req.session?.user;
  // const UserID = req.session?.UserID;
  try {
    renderTemplate(Login, {}, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderLogin;
