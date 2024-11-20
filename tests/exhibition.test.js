// tests/exhibition.test.js
const request = require('supertest');
const app = require('../index');

describe('Exhibition API', () => {
    it('should create a new exhibition', async () => {
        const res = await request(app)
            .post('/api/exhibitions')
            .send({
                title: 'Test Exhibition',
                date: '2024-11-20',
                description: 'This is a test exhibition',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('title', 'Test Exhibition');
    });

    it('should fetch all exhibitions', async () => {
        const res = await request(app)
            .get('/api/exhibitions');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should update an exhibition', async () => {
        const newExhibition = await request(app)
            .post('/api/exhibitions')
            .send({
                title: 'Test Exhibition to Update',
                date: '2024-11-22',
                description: 'This is an exhibition to be updated',
            });
        const res = await request(app)
            .put(`/api/exhibitions/${newExhibition.body.id}`)
            .send({
                title: 'Updated Exhibition Title',
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title', 'Updated Exhibition Title');
    });

    it('should delete an exhibition', async () => {
        const newExhibition = await request(app)
            .post('/api/exhibitions')
            .send({
                title: 'Test Exhibition to Delete',
                date: '2024-11-23',
                description: 'This is an exhibition to be deleted',
            });
        const res = await request(app)
            .delete(`/api/exhibitions/${newExhibition.body.id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Exhibition deleted successfully');
    });
});
