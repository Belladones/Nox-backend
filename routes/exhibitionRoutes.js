// routes/exhibitionRoutes.js
const express = require('express');
const exhibitionRouter = express.Router();
const { getAllExhibitions, createExhibition, updateExhibition, deleteExhibition } = require('../controllers/exhibitionController');

exhibitionRouter.get('/', getAllExhibitions);
exhibitionRouter.post('/', createExhibition);
exhibitionRouter.put('/:id', updateExhibition);
exhibitionRouter.delete('/:id', deleteExhibition);

module.exports = exhibitionRouter;