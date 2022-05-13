// Import express
const router = require('express').Router();
const { Dashboard, Home, User } = require('../models');

// WORKS
router.get('/', (req, res) => {
    Dashboard.findAll({
        include: [Home, User],
    })
      .then((dashboard) => res.json(dashboard))
      .catch((err) => res.status(500).json(err));
});

// ----------------------------------------------

// router.get('/', async (req, res) => {
// try {
//     // Get all projects and JOIN with user data
//     const dashboardData = await Dashboard.findAll({
//         include: [Home],
//     });

//     // Serialize data so the template can read it
//     const dashboard = dashboardData.map((dashboard) => dashboard.get({ plain: true }));

//     // // Pass serialized data and session flag into template
//     res.render('login', { 
//     layout: 'dashboard',
//     dashboard,
//     });
// } catch (err) {
//     res.status(500).json(err);
// }
// });

module.exports = router;