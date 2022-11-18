const { User_Posture } = require('../../db/models');

const addtoFav = async (req, res) => {
  try {
    if (req.body) {
      const check = await User_Posture.findOne({ where: { UserID: req.body.UserID, PostureID: req.body.AsanaAPIID } });
      if (check) {
        res.sendStatus(400);
      } else {
        await User_Posture.create({
          UserID: req.body.UserID, PostureID: req.body.AsanaAPIID,
        });
        res.sendStatus(200);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteFav = async (req, res) => {
  const PostureID = req.params.id;
  const UserID = req.session.user.id;
  await User_Posture.destroy({ where: { PostureID, UserID } });
  res.sendStatus(200);
};

module.exports = { addtoFav, deleteFav };
