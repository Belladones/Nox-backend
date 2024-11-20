const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Video = sequelize.define('Video', {
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
    }
}, {
    tableName: 'videos',
    timestamps: true,
});

module.exports = Video;