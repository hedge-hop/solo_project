const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');
const { AsanaAPI } = require('../../db/models');

const renderMain = async (req, res) => {
  const user = req.session?.user;
  // const UserID = req.session?.UserID;
  // console.log(allAsanas);
  try {
    // const allAsanas = await Asana.findAll();
    const allFromApi = await AsanaAPI.findAll();
    renderTemplate(Main, { user, allFromApi }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderMain;
