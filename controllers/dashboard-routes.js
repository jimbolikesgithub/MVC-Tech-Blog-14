// Import express
const router = require('express').Router();
const { Dashboard, Home, User } = require('../models');

router.get('/', (req, res) => {
    Home.findAll({
      include: [Dashboard],
    })
      .then((home) => res.json(home))
      .catch((err) => res.status(500).json(err));
  });

module.exports = router;