const { Model, DataTypes } = require('sequelize');
// establish connections
const sequelize = require('../config/connection')

class Dashboard extends Model {};

// 1st Obj: Columns for table
// 2nd Obj: Specify sequelize
Dashboard.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            // more than ONE user signing up/logging in
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
                validate: {
                    // max character limit of 25
                    len: [0, 25],
                },
        },
        content: {
            type: DataTypes.STRING,
                validate: {
                    // max character limit of 40
                    len: [0, 40],
                },
        },
    }, 
    // Add bycrypt HERE {},
    {
        // Passes the connection instance
        sequelize,
        // Generated model will OMIT the createdAt and updatedAt attributes (these attributes store a timestamp of WHEN a row was inserted as well as when it was last updated)
        timestamps: false,
        // Allows Sequelize to auto pluralize the model name
        freezeTableName: true,
        // Will put an underscore inbetween two words (ex. `camelCase` becomes `camel_case`)
        underscored: true,
        // Choose the model name
        modelName: 'dashboard',
    }
);

module.extends = Dashboard;