// Import express
const router = require('express').Router();
const { Dashboard, Home, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const dashboardData = await Dashboard.findAll({
            include: [
                {
                    model: User,
                },
            ],
        });

        const dashboard = dashboardData.map((dashboard) => dashboard.get({ plan: true }));

        // Render page HERE
        // res.render('')
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});