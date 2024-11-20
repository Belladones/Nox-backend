require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const documentaryRoutes = require('./routes/documentaryRoutes');
const exhibitionRoutes = require('./routes/exhibitionRoutes');
const anecdoteRoutes = require('./routes/anecdoteRoutes');
const photoRoutes = require('./routes/photoRoutes');
const videoRoutes = require('./routes/videoRoutes');
const articleRoutes = require('./routes/articleRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/documentaries', documentaryRoutes);
app.use('/api/exhibitions', exhibitionRoutes);
app.use('/api/anecdotes', anecdoteRoutes);
app.use('/api/photos', photoRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/articles', articleRoutes);

// Sync with the database and start the server
if (process.env.NODE_ENV !== 'test') {
    sequelize.sync()
        .then(() => {
            app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
        })
        .catch(error => console.log('Error syncing with the database:', error));
}

module.exports = app; // Exporter l'application pour les tests
