const renderTemplate = require('../lib/renderTemplate');
const Register = require('../views/Register');
// const { Party } = require('../../db/models');

const renderReg = async (req, res) => {
  // const user = req.session?.user;
  // const UserID = req.session?.UserID;
  try {
    renderTemplate(Register, {}, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderReg;
