const { User } = require('../models');

const userData = [
    {
        username: 'therock01',
        password: 'therock123'
    },
    {
        username: 'stonecold01',
        password: 'stonecold123'
    },
]

// Declare a variable, and bulk create seeds via specified table
const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser;