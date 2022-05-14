# MVC-Tech-Block-14 Instructions

[note: Database stuff ALWAYS FIRST!]

<!-- DONE -->
1. Create `package.json` file
    - `npm init -y`
        * `npm i express dotenv mysql2 sequelize`
<!-- DONE -->
2. Create `server.js`
    - `touch server.js` file
<!-- DONE -->
3. Add nodemon for easier code refresh
    - `npm i --save-dev nodemon`
        * How to run (Windows): ex. `npx nodemon server.js`
<!-- DONE -->
4. Create `db/` folder
    - Create `schema.sql` file
        * `DROP DATABASE IF EXISTS blog_db;`
        * `CREATE DATABASE blog_db;`
<!-- DONE -->
5. Create `config/` folder
    - Create `connection.js` file
<!-- DONE -->
7. Create `.env` file
<!-- DONE -->
8. IF errors, `SOURCE SCHEMA.SQL` & restart nodemon
<!-- DONE -->
9. Run the following packages:
    - `bycrypt`
        * `npm install bcrypt`
    - `connect-session-sequelize`
        * `npm install connect-session-sequelize`
    - `express-handlebars`
        * `npm install express-handlebars`
    - `express-session`
        * `npm install express-session`
<!-- DONE -->
10. Create `models/` folder
    - Add mapped out files
        * `Dashboard.js`
        * `Home.js`
        * `User.js`
        * `index.js`
    - Add logic (tables)
<!-- DONE -->
11. Create `seeds/` folder
    - Add mock data to json files
        * `dashboardData.js`
        * `homedData.js`
        * `userData.js`
    - Call each set of seeds
        * `seed.js`
    - TEST SEEDED TABLES IN TERMINAL
<!-- DONE -->
12. Create `controllers/` folder
    - Add mapped out files (main pages)
        * `dashboard-routes.js`
        * `home-routes.js`
        * `index.js`
    - Create `api/` folder
        * `user-routes.js`
        * `post-routes.js`
        * `comment-routes.js`
        * `index.js`
        


