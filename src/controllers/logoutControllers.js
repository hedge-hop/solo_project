const logout = (req, res) => {
  if (req.session.user) {
    req.session.destroy(() => {
      res.clearCookie('Session');
      res.redirect('/');
    });
  } else {
    res.redirect('/');
  }
};
module.exports = { logout };
