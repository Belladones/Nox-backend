// routes/videoRoutes.js
const express = require('express');
const videoRouter = express.Router();
const { createVideo, getAllVideos, getVideoById, updateVideo, deleteVideo } = require('../controllers/videoController');

videoRouter.post('/', createVideo);
videoRouter.get('/', getAllVideos);
videoRouter.get('/:id', getVideoById);
videoRouter.put('/:id', updateVideo);
videoRouter.delete('/:id', deleteVideo);

module.exports = videoRouter;