// controllers/exhibitionController.js
const Exhibition = require('../models/Exhibition');
const Photo = require('../models/Photo');
const Video = require('../models/Video');
const Article = require('../models/Article');

// Controller for getting all exhibitions
exports.getAllExhibitions = async (req, res) => {
    try {
        const exhibitions = await Exhibition.findAll({ include: [Photo, Video, Article] });
        res.status(200).json(exhibitions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching exhibitions', error });
    }
};

// Controller for creating a new exhibition
exports.createExhibition = async (req, res) => {
    try {
        const { title, date, description } = req.body;
        const newExhibition = await Exhibition.create({ title, date, description });
        res.status(201).json(newExhibition);
    } catch (error) {
        res.status(500).json({ message: 'Error creating exhibition', error });
    }
};

// Controller for updating an exhibition
exports.updateExhibition = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, date, description } = req.body;
        const exhibition = await Exhibition.findByPk(id);
        if (!exhibition) {
            return res.status(404).json({ message: 'Exhibition not found' });
        }
        exhibition.title = title || exhibition.title;
        exhibition.date = date || exhibition.date;
        exhibition.description = description || exhibition.description;
        await exhibition.save();
        res.status(200).json(exhibition);
    } catch (error) {
        res.status(500).json({ message: 'Error updating exhibition', error });
    }
};

// Controller for deleting an exhibition
exports.deleteExhibition = async (req, res) => {
    try {
        const { id } = req.params;
        const exhibition = await Exhibition.findByPk(id);
        if (!exhibition) {
            return res.status(404).json({ message: 'Exhibition not found' });
        }
        await exhibition.destroy();
        res.status(200).json({ message: 'Exhibition deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting exhibition', error });
    }
};
