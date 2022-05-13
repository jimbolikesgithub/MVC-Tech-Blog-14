const router = require('express').Router();

const apiRoutes = require('./api')
const dashboardRoutes = require('./dashboard-routes');
const homeRoutes = require('./home-routes');

router.use('/api', apiRoutes) // Works if I comment this out
router.use('/dashboard', dashboardRoutes); // Works if I comment this out
router.use('/home', homeRoutes);

router.use((req, res) => {
    res.send("<h1>wrong route!</h1>")
});

module.exports = router;

// DONE

// note: Never leave ANY route files empty, else will return the following: `TypeError: Router.use() requires a middleware function but got a Object`