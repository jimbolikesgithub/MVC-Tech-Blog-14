// Import express
const router = require('express').Router();
const { Dashboard, Home, User } = require('../../models');

router.get('/login', async (req, res) => {
  try {
      // Get all projects and JOIN with user data
      const dashboardData = await Dashboard.findAll({
        include: [Home, User],
      });
  
      // Serialize data so the template can read it
      const dashboard = dashboardData.map((dashboard) => dashboard.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('login', { dashboard });
  } catch (err) {
      res.status(500).json(err);
  }
  });

// WORKS
router.get('/signup', async (req, res) => {
  try {
      // Get all projects and JOIN with user data
      const signupData = await Dashboard.findAll({
        include: [Home, User],
      });
  
      // Serialize data so the template can read it
      const signup = signupData.map((dashboard) => dashboard.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('signup', { signup });
  } catch (err) {
      res.status(500).json(err);
  }
  });

module.exports = router;