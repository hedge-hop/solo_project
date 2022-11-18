const renderTemplate = require('../lib/renderTemplate');
const { Posture } = require('../../db/models');
const AllPostures = require('../views/AllPostures');

const renderAllPostures = async (req, res) => {
  const user = req.session?.user;
  try {
    const allPoses = await Posture.findAll();
    renderTemplate(AllPostures, { user, allPoses }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderAllPostures;
