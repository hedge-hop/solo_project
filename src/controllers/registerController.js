const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const Register = require('../views/Register');
const { User } = require('../../db/models');

const renderReg = async (req, res) => {
  // const user = req.session?.user;
  // const UserID = req.session?.UserID;
  try {
    renderTemplate(Register, {}, res);
  } catch (error) {
    console.log(error);
  }
};

const regUser = async (req, res) => {
  try {
    console.log('req.bodyyyyyyyyyyyyyyyyyyyyyyyyy', req.body);
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
    // res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderReg, regUser };
