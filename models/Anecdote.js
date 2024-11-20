const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Photo = require('./Photo');

const Anecdote = sequelize.define('Anecdote', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    tableName: 'anecdotes',
    timestamps: true,
});

Anecdote.hasMany(Photo);

module.exports = Anecdote;