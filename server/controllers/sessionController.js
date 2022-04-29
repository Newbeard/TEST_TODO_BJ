const sessionController = async (req, res) => {
  try {
    if (req.session.user) {
      res.json({
        id: req.session.user.id,
        isAdmin: req.session.user.id,
      });
    }
    else {
      res.json({
        id: null,
        isAdmin: false,
      });
    }
  } catch (err) {
    res.status(401).end();
  }
};

module.exports = {
  sessionController
};
