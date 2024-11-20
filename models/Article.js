const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Article = sequelize.define('Article', {
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
    tableName: 'articles',
    timestamps: true,
});

module.exports = Article;