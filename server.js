const express = require('express');
// connect the connection to the server
const sequelize = require('./config/connection')

const app = express();

const PORT = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log('hi')
    })
})