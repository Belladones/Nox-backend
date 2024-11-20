const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Photo = sequelize.define('Photo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DocumentaryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ExhibitionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    AnecdoteId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    tableName: 'photos',
    timestamps: true,
});

module.exports = Photo;