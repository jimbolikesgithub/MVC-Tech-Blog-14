const express = require('express');
// connect the connection to the server
const sequelize = require('./config/connection')
const path = require('path');
const exphbs = require('express-handlebars')
const session = require('express-session');
const routes = require('./controllers')
const app = express();
const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.use(routes);

const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(session(sess));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Now listening at http://localhost:${PORT}`)
    })
})

