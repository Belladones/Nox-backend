// routes/documentaryRoutes.js
const express = require('express');
const router = express.Router();
const { getAllDocumentaries, createDocumentary, getDocumentaryById, updateDocumentary, deleteDocumentary } = require('../controllers/documentaryController');

router.get('/', getAllDocumentaries);
router.post('/', createDocumentary);
router.get('/:id', getDocumentaryById);
router.put('/:id', updateDocumentary);
router.delete('/:id', deleteDocumentary);

module.exports = router;

