const { Model, DataTypes } = require('sequelize');
// establish connections
const sequelize = require('../config/connection')

class Home extends Model {};

// 1st Obj: Columns for table
// 2nd Obj: Specify sequelize
Home.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            // more than ONE user signing up/logging in
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.STRING,
                validate: {
                    // max character limit of 40
                    len: [0, 40],
                },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
                // This allows the user to pass in an id which already exist without throwing a `SequelizeUniqueConstraintError`
                unique: false
            }
        }
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
        modelName: 'home',
    }
);

module.extends = Home;