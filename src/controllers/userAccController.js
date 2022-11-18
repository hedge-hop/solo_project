const renderTemplate = require('../lib/renderTemplate');
const UserPage = require('../views/UserPage');
const { User_Posture, Posture } = require('../../db/models');

const renderUserAcc = async (req, res) => {
  const user = req.session?.user;
  try {
    const UserID = req.session.user.id;
    const userFavPosRaw = await User_Posture.findAll({ where: { UserID }, raw: true });
    const favPos = [];
    for (let i = 0; i < userFavPosRaw.length; i += 1) {
      const pos = await Posture.findOne({ raw: true, where: { id: userFavPosRaw[i].PostureID } });
      favPos.push(pos);
    }
    renderTemplate(UserPage, { user, favPos }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderUserAcc;
