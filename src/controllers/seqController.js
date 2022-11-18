/* const renderTemplate = require('../lib/renderTemplate');
const { User_Posture } = require('../../db/models');

const addtoSeq = async (req, res) => {
  try {
      if (req.body) {
      console.log(UserID, req.body.UserID);
      const { UserID, AsanaAPIID } = req.body;
      const userSeq = [];
      const addedtoseq = await Posture.findOne({
        PostureID: req.body.AsanaAPIID,
      });
      console.log('addedtofav======>', addedtofav);
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addtoSeq }; */
