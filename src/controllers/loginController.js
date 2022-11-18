const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');
const { User } = require('../../db/models');

const renderLogin = async (req, res) => {
  try {
    renderTemplate(Login, {}, res);
  } catch (error) {
    console.log(error);
  }
};

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.sendStatus(400);
    }
    if (user) {
      const passCheck = await bcrypt.compare(password, user.password);
      if (!passCheck) {
        res.sendStatus(401);
      } else {
        req.session.user = user.dataValues;
        req.session.save(() => {
          res.json({
            name: user.firstname,
          });
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderLogin, postLogin };
