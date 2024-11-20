// routes/photoRoutes.js
const express = require('express');
const photoRouter = express.Router();
const { createPhoto, getAllPhotos, getPhotoById, updatePhoto, deletePhoto } = require('../controllers/photoController');

photoRouter.post('/', createPhoto);
photoRouter.get('/', getAllPhotos);
photoRouter.get('/:id', getPhotoById);
photoRouter.put('/:id', updatePhoto);
photoRouter.delete('/:id', deletePhoto);

module.exports = photoRouter;