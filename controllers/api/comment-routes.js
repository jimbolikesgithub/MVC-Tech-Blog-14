// Import express
const router = require('express').Router();
const { Home } = require('../../models');


router.post('/comment', async (req, res) => {
  try {
    const comment = await Home.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;