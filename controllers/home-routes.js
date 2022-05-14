// Import express
const router = require('express').Router();
const { Dashboard, Home, User } = require('../models');

// WORKS
router.get('/home', async (req, res) => {
  try {
      // Get all projects and JOIN with user data
      const homeData = await Dashboard.findAll({
        include: [Home, User],
      });
  
      // Serialize data so the template can read it
      const home = homeData.map((home) => home.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('posts', { home });
  } catch (err) {
      res.status(500).json(err);
  }
  });


  router.get('/login-redirect', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/posts');
      return;
    }
  
    res.render('login');
    });


module.exports = router;