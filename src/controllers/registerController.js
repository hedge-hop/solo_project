const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const Register = require('../views/Register');
const { User } = require('../../db/models');

const renderReg = async (req, res) => {
  try {
    renderTemplate(Register, {}, res);
  } catch (error) {
    console.log(error);
  }
};

const regUser = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      cellphone,
      email,
      password,
    } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstname,
      lastname,
      cellphone,
      email,
      password: hashedPass,

    });
    res.json({
      name: user.firstname,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderReg, regUser };
