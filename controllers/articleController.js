// controllers/articleController.js
const Article = require('../models/Article');

// Controller for creating an article
exports.createArticle = async (req, res) => {
    try {
        const { title, date, content, DocumentaryId, ExhibitionId } = req.body;
        const newArticle = await Article.create({ title, date, content, DocumentaryId, ExhibitionId });
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(500).json({ message: 'Error creating article', error });
    }
};

// Controller for getting all articles
exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Article.findAll();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching articles', error });
    }
};

// Controller for getting a single article by ID
exports.getArticleById = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findByPk(id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching article', error });
    }
};

// Controller for updating an article
exports.updateArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, date, content } = req.body;
        const article = await Article.findByPk(id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        await article.update({ title, date, content });
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: 'Error updating article', error });
    }
};

// Controller for deleting an article
exports.deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findByPk(id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        await article.destroy();
        res.status(200).json({ message: 'Article deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting article', error });
    }
};
