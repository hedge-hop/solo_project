const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');
const { Posture } = require('../../db/models');

const renderMain = async (req, res) => {
  const user = req.session?.user;
  // const UserID = req.session?.UserID;
  // console.log(allAsanas);
  try {
    // const allAsanas = await Asana.findAll();
    const allPoses = await Posture.findAll();
    console.log(allPoses);
    renderTemplate(Main, { user, allPoses }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderMain;
