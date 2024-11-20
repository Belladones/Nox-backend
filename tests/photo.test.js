// tests/photo.test.js
const request = require('supertest');
const app = require('../index');

describe('Photo API', () => {
    it('should create a new photo', async () => {
        const res = await request(app)
            .post('/api/photos')
            .send({
                title: 'Test Photo',
                date: '2024-11-20',
                link: 'https://example.com/photo.jpg',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('title', 'Test Photo');
    });

    it('should fetch all photos', async () => {
        const res = await request(app)
            .get('/api/photos');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should fetch a single photo by ID', async () => {
        const newPhoto = await request(app)
            .post('/api/photos')
            .send({
                title: 'Test Photo for Fetching',
                date: '2024-11-21',
                link: 'https://example.com/photo2.jpg',
            });
        const res = await request(app)
            .get(`/api/photos/${newPhoto.body.id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title', 'Test Photo for Fetching');
    });

    it('should update a photo', async () => {
        const newPhoto = await request(app)
            .post('/api/photos')
            .send({
                title: 'Test Photo to Update',
                date: '2024-11-22',
                link: 'https://example.com/photo3.jpg',
            });
        const res = await request(app)
            .put(`/api/photos/${newPhoto.body.id}`)
            .send({
                title: 'Updated Photo Title',
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title', 'Updated Photo Title');
    });

    it('should delete a photo', async () => {
        const newPhoto = await request(app)
            .post('/api/photos')
            .send({
                title: 'Test Photo to Delete',
                date: '2024-11-23',
                link: 'https://example.com/photo4.jpg',
            });
        const res = await request(app)
            .delete(`/api/photos/${newPhoto.body.id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Photo deleted successfully');
    });
});
