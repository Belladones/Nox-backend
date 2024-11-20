const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Photo = require('./Photo');
const Video = require('./Video');
const Article = require('./Article');

const Exhibition = sequelize.define('Exhibition', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    tableName: 'exhibitions',
    timestamps: true,
});

Exhibition.hasMany(Photo);
Exhibition.hasMany(Video);
Exhibition.hasMany(Article);

module.exports = Exhibition;