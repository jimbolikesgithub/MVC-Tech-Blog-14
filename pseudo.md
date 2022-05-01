# MVC-Tech-Block-14 Instructions

[note: Database stuff ALWAYS FIRST!] 

1. Create `package.json` file
    - `npm init -y`
        * `npm i express dotenv mysql2 sequelize`
2. Create `server.js`
    - `touch server.js` file
3. Add nodemon for easier code refresh
    - `npm i --save-dev nodemon`
        * How to run (Windows): ex. `npx nodemon server.js`
4. Create `db/` folder
    - Create `schema.sql` file
        * `DROP DATABASE IF EXISTS blog_db;`
        * `CREATE DATABASE blog_db;`
5. Create `config/` folder
    - Create `connection.js` file
7. Create `.env` file
8. IF errors, `SOURCE SCHEMA.SQL` & restart nodemon
9. Create `models/` folder
    - Add mapped out files
        * ex. `User.js`
        * ex. `Pikachu.js`
        * `index.js` (A MUST)
10. Run the following packages:
    - ``

