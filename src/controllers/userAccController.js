const renderTemplate = require('../lib/renderTemplate');
const UserPage = require('../views/UserPage');
const { User_Posture, Posture } = require('../../db/models');

const renderUserAcc = async (req, res) => {
  const user = req.session?.user;
  // const UserID = req.session?.UserID;
  try {
    const UserID = req.session.user.id;
    const userFavPosRaw = await User_Posture.findAll({ where: { UserID }, raw: true });
    // const favPosIdArr = [];
    // const posturesID = await userFav.map((el) => favPosIdArr.push(el.PostureID));
    // const favPosFull = await Posture.findAll({ where: { id: i } });
    const favPos = [];
    for (let i = 0; i < userFavPosRaw.length; i += 1) {
      const pos = await Posture.findOne({ raw: true, where: { id: userFavPosRaw[i].PostureID } });
      favPos.push(pos);
    }
    console.log('favPOSTURES', favPos);
    renderTemplate(UserPage, { user, favPos }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderUserAcc;
