// routes/anecdoteRoutes.js
const express = require('express');
const anecdoteRouter = express.Router();
const { createAnecdote, getAllAnecdotes, getAnecdoteById, updateAnecdote, deleteAnecdote } = require('../controllers/anecdoteController');

anecdoteRouter.post('/', createAnecdote);
anecdoteRouter.get('/', getAllAnecdotes);
anecdoteRouter.get('/:id', getAnecdoteById);
anecdoteRouter.put('/:id', updateAnecdote);
anecdoteRouter.delete('/:id', deleteAnecdote);

module.exports = anecdoteRouter;