const renderTemplate = require('../lib/renderTemplate');
const { Posture } = require('../../db/models');
const AllPostures = require('../views/AllPostures');

const renderAllPostures = async (req, res) => {
  const user = req.session?.user;
  // const UserID = req.session?.UserID;
  // console.log(allAsanas);
  try {
    // const allAsanas = await Asana.findAll();
    const allPoses = await Posture.findAll();
    console.log(allPoses);
    renderTemplate(AllPostures, { user, allPoses }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderAllPostures;
