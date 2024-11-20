// controllers/videoController.js
const Video = require('../models/Video');

// Controller for creating a video
exports.createVideo = async (req, res) => {
    try {
        const { title, date, link, DocumentaryId, ExhibitionId } = req.body;
        const newVideo = await Video.create({ title, date, link, DocumentaryId, ExhibitionId });
        res.status(201).json(newVideo);
    } catch (error) {
        res.status(500).json({ message: 'Error creating video', error });
    }
};

// Controller for getting all videos
exports.getAllVideos = async (req, res) => {
    try {
        const videos = await Video.findAll();
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching videos', error });
    }
};

// Controller for getting a single video by ID
exports.getVideoById = async (req, res) => {
    try {
        const { id } = req.params;
        const video = await Video.findByPk(id);
        if (!video) return res.status(404).json({ message: 'Video not found' });
        res.status(200).json(video);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching video', error });
    }
};

// Controller for updating a video
exports.updateVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, date, link, DocumentaryId, ExhibitionId } = req.body;
        const video = await Video.findByPk(id);
        if (!video) return res.status(404).json({ message: 'Video not found' });
        await video.update({ title, date, link, DocumentaryId, ExhibitionId });
        res.status(200).json(video);
    } catch (error) {
        res.status(500).json({ message: 'Error updating video', error });
    }
};

// Controller for deleting a video
exports.deleteVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const video = await Video.findByPk(id);
        if (!video) return res.status(404).json({ message: 'Video not found' });
        await video.destroy();
        res.status(200).json({ message: 'Video deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting video', error });
    }
};



