const { User_Posture } = require('../../db/models');

const addtoFav = async (req, res) => {
  try {
    if (req.body) {
      const addedtofav = await User_Posture.create({
        UserID: req.body.UserID, PostureID: req.body.AsanaAPIID,
      });
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addtoFav };
