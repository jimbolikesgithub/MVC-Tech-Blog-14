// Import express
const router = require('express').Router();
const { Dashboard, Home, User } = require('../models');

// WORKS
router.get('/', async (req, res) => {
  try {
      // Get all projects and JOIN with user data
      const dashboardData = await Dashboard.findAll({
        include: [Home, User],
      });
  
      // Serialize data so the template can read it
      const dashboard = dashboardData.map((dashboard) => dashboard.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('login', { main });
  } catch (err) {
      res.status(500).json(err);
  }
  });


module.exports = router;