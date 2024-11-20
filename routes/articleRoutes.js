// routes/articleRoutes.js
const express = require('express');
const articleRouter = express.Router();
const { createArticle, getAllArticles, getArticleById, updateArticle, deleteArticle } = require('../controllers/articleController');

articleRouter.post('/', createArticle);
articleRouter.get('/', getAllArticles);
articleRouter.get('/:id', getArticleById);
articleRouter.put('/:id', updateArticle);
articleRouter.delete('/:id', deleteArticle);

module.exports = articleRouter;