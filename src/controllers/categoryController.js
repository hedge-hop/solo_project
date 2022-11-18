const renderTemplate = require('../lib/renderTemplate');
const { Category } = require('../../db/models');

const AllCats = require('../views/AllCategories');

const renderAllCat = async (req, res) => {
  const user = req.session?.user;
  try {
    const allCatsRaw = await Category.findAll();
    const categories = await allCatsRaw.map((el) => el.dataValues);
    const data = categories.map((el) => el.name);
    console.log('CHECK CAT', categories[0].name);
    renderTemplate(AllCats, { user, categories }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderAllCat;
