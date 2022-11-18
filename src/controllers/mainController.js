const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');
const { Posture, Category } = require('../../db/models');

const renderMain = async (req, res) => {
  const user = req.session?.user;
  try {
    const allPoses = await Posture.findAll();
    const allCatsRaw = await Category.findAll();
    const categories = await allCatsRaw.map((el) => el.dataValues);
    renderTemplate(Main, { user, allPoses, categories }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderMain;
