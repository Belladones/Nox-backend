const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Anecdote = require('./Anecdote');
const Photo = require('./Photo');
const Video = require('./Video');
const Article = require('./Article');

const Documentary = sequelize.define('Documentary', {
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
    }
}, {
    tableName: 'documentaries',
    timestamps: true,
});

Documentary.hasMany(Anecdote);
Documentary.hasMany(Photo);
Documentary.hasMany(Video);
Documentary.hasMany(Article);

module.exports = Documentary;