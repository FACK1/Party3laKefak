exports.get = (req, res) => {
  res.clearCookie('logged_in').redirect('/');
};
