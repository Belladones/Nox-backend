// controllers/anecdoteController.js
const Anecdote = require('../models/Anecdote');

// Controller for creating an anecdote
exports.createAnecdote = async (req, res) => {
    try {
        const { title, date, content } = req.body;
        const newAnecdote = await Anecdote.create({ title, date, content });
        res.status(201).json(newAnecdote);
    } catch (error) {
        res.status(500).json({ message: 'Error creating anecdote', error });
    }
};

// Controller for getting all anecdotes
exports.getAllAnecdotes = async (req, res) => {
    try {
        const anecdotes = await Anecdote.findAll();
        res.status(200).json(anecdotes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching anecdotes', error });
    }
};

// Controller for getting a single anecdote by ID
exports.getAnecdoteById = async (req, res) => {
    try {
        const { id } = req.params;
        const anecdote = await Anecdote.findByPk(id);
        if (!anecdote) {
            return res.status(404).json({ message: 'Anecdote not found' });
        }
        res.status(200).json(anecdote);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching anecdote', error });
    }
};

// Controller for updating an anecdote
exports.updateAnecdote = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, date, content } = req.body;
        const anecdote = await Anecdote.findByPk(id);
        if (!anecdote) {
            return res.status(404).json({ message: 'Anecdote not found' });
        }
        await anecdote.update({ title, date, content });
        res.status(200).json(anecdote);
    } catch (error) {
        res.status(500).json({ message: 'Error updating anecdote', error });
    }
};

// Controller for deleting an anecdote
exports.deleteAnecdote = async (req, res) => {
    try {
        const { id } = req.params;
        const anecdote = await Anecdote.findByPk(id);
        if (!anecdote) {
            return res.status(404).json({ message: 'Anecdote not found' });
        }
        await anecdote.destroy();
        res.status(200).json({ message: 'Anecdote deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting anecdote', error });
    }
};
