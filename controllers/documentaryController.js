// controllers/documentaryController.js
const Documentary = require('../models/Documentary');
const Anecdote = require('../models/Anecdote');
const Photo = require('../models/Photo');
const Video = require('../models/Video');
const Article = require('../models/Article');

// Controller for getting all documentaries
exports.getAllDocumentaries = async (req, res) => {
    try {
        const documentaries = await Documentary.findAll({ include: [Anecdote, Photo, Video, Article] });
        res.status(200).json(documentaries);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching documentaries', error });
    }
};

// Controller for creating a new documentary
exports.createDocumentary = async (req, res) => {
    try {
        const { title, date, description } = req.body;
        const newDocumentary = await Documentary.create({ title, date, description });
        res.status(201).json(newDocumentary);
    } catch (error) {
        res.status(500).json({ message: 'Error creating documentary', error });
    }
};

// Controller for getting a single documentary by ID
exports.getDocumentaryById = async (req, res) => {
    try {
        const { id } = req.params;
        const documentary = await Documentary.findByPk(id, { include: [Anecdote, Photo, Video, Article] });
        if (!documentary) {
            return res.status(404).json({ message: 'Documentary not found' });
        }
        res.status(200).json(documentary);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching documentary', error });
    }
};

// Controller for updating a documentary
exports.updateDocumentary = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, date, description } = req.body;
        const documentary = await Documentary.findByPk(id);
        if (!documentary) {
            return res.status(404).json({ message: 'Documentary not found' });
        }
        await documentary.update({ title, date, description });
        res.status(200).json(documentary);
    } catch (error) {
        res.status(500).json({ message: 'Error updating documentary', error });
    }
};

// Controller for deleting a documentary
exports.deleteDocumentary = async (req, res) => {
    try {
        const { id } = req.params;
        const documentary = await Documentary.findByPk(id);
        if (!documentary) {
            return res.status(404).json({ message: 'Documentary not found' });
        }
        await documentary.destroy();
        res.status(200).json({ message: 'Documentary deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting documentary', error });
    }
};