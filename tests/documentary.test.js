// tests/documentary.test.js
const request = require('supertest');
const app = require('../index');

describe('Documentary API', () => {
    it('should create a new documentary', async () => {
        const res = await request(app)
            .post('/api/documentaries')
            .send({
                title: 'Test Documentary',
                date: '2024-11-20',
                description: 'This is a test documentary',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('title', 'Test Documentary');
    });

    it('should fetch all documentaries', async () => {
        const res = await request(app)
            .get('/api/documentaries');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should fetch a single documentary by ID', async () => {
        const newDoc = await request(app)
            .post('/api/documentaries')
            .send({
                title: 'Test Documentary 2',
                date: '2024-11-21',
                description: 'This is another test documentary',
            });
        const res = await request(app)
            .get(`/api/documentaries/${newDoc.body.id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title', 'Test Documentary 2');
    });

    it('should update a documentary', async () => {
        const newDoc = await request(app)
            .post('/api/documentaries')
            .send({
                title: 'Test Documentary to Update',
                date: '2024-11-22',
                description: 'This is a documentary to be updated',
            });
        const res = await request(app)
            .put(`/api/documentaries/${newDoc.body.id}`)
            .send({
                title: 'Updated Documentary Title',
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title', 'Updated Documentary Title');
    });

    it('should delete a documentary', async () => {
        const newDoc = await request(app)
            .post('/api/documentaries')
            .send({
                title: 'Test Documentary to Delete',
                date: '2024-11-23',
                description: 'This is a documentary to be deleted',
            });
        const res = await request(app)
            .delete(`/api/documentaries/${newDoc.body.id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Documentary deleted successfully');
    });
});
