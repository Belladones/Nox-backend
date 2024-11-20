// controllers/photoController.js
const Photo = require('../models/Photo');

// Controller for creating a photo
exports.createPhoto = async (req, res) => {
    try {
        const { title, date, link, DocumentaryId, ExhibitionId, AnecdoteId } = req.body;
        const newPhoto = await Photo.create({ title, date, link, DocumentaryId, ExhibitionId, AnecdoteId });
        res.status(201).json(newPhoto);
    } catch (error) {
        res.status(500).json({ message: 'Error creating photo', error });
    }
};

// Controller for getting all photos
exports.getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.findAll();
        res.status(200).json(photos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching photos', error });
    }
};

// Controller for getting a single photo by ID
exports.getPhotoById = async (req, res) => {
    try {
        const { id } = req.params;
        const photo = await Photo.findByPk(id);
        if (!photo) {
            return res.status(404).json({ message: 'Photo not found' });
        }
        res.status(200).json(photo);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching photo', error });
    }
};

// Controller for updating a photo
exports.updatePhoto = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, date, link, DocumentaryId, ExhibitionId, AnecdoteId } = req.body;
        const photo = await Photo.findByPk(id);
        if (!photo) {
            return res.status(404).json({ message: 'Photo not found' });
        }
        await photo.update({ title, date, link, DocumentaryId, ExhibitionId, AnecdoteId });
        res.status(200).json(photo);
    } catch (error) {
        res.status(500).json({ message: 'Error updating photo', error });
    }
};

// Controller for deleting a photo
exports.deletePhoto = async (req, res) => {
    try {
        const { id } = req.params;
        const photo = await Photo.findByPk(id);
        if (!photo) {
            return res.status(404).json({ message: 'Photo not found' });
        }
        await photo.destroy();
        res.status(200).json({ message: 'Photo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting photo', error });
    }
};



