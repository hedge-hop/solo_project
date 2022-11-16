const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');
const { User } = require('../../db/models');

const renderLogin = async (req, res) => {
  // const user = req.session?.user;
  // const UserID = req.session?.UserID;
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
      console.log('user not found');
      res.sendStatus(400);
    }
    if (user) {
      const passCheck = await bcrypt.compare(password, user.password);
      if (!passCheck) {
        console.log('wrong password');
        res.sendStatus(401);
      } else {
        req.session.user = user.dataValues;
        req.session.save(() => {
          res.json({
            name: user.firstname,
            // middlename: user.middlename,
          });
        });
        // console.log('user datavalues===>>>', user.dataValues.firstname);
        // console.log('REQ SESSION', req.session.user.firstname);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderLogin, postLogin };
