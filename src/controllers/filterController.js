const renderTemplate = require('../lib/renderTemplate');
const { Posture_Category, Posture } = require('../../db/models');

const Filter = require('../views/Filter');

const renderFilter = async (req, res) => {
  try {
    const user = req.session?.user;
    const posByCatRaw = await Posture_Category.findAll({ where: { CategoryID: req.params.id }, raw: true });
    const posByCat = [];
    for (let i = 0; i < posByCatRaw.length; i += 1) {
      const pos = await Posture.findOne({ raw: true, where: { id: posByCatRaw[i].PostureID } });
      posByCat.push(pos);
    }
    renderTemplate(Filter, { user, posByCat }, res);
  } catch (error) {
    console.log(error);
  }
};
module.exports = renderFilter;
