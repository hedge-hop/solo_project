const renderTemplate = require('../lib/renderTemplate');
const { User_AsanaAPIs } = require('../../db/models');

const addtoFav = async (req, res) => {
  try {
    console.log('req body *******', req.body);
    if (req.body) {
      /* console.log(UserID, req.body.UserID);
      const { UserID, AsanaAPIID } = req.body; */
      const addedtofav = await User_AsanaAPIs.create({
        UserID: req.body.UserID, AsanaAPIID: req.body.AsanaAPIID,
      });
      console.log('addedtofav======>', addedtofav);
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addtoFav };
