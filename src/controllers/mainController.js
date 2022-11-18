const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');
const { Posture } = require('../../db/models');

const renderMain = async (req, res) => {
  const user = req.session?.user;
  try {
    const allPoses = await Posture.findAll();
    renderTemplate(Main, { user, allPoses }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderMain;
