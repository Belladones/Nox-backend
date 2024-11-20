// tests/anecdote.test.js
const request = require('supertest');
const app = require('../index');

describe('Anecdote API', () => {
    it('should create a new anecdote', async () => {
        const res = await request(app)
            .post('/api/anecdotes')
            .send({
                title: 'Test Anecdote',
                date: '2024-11-20',
                content: 'This is a test anecdote',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('title', 'Test Anecdote');
    });

    it('should update an anecdote', async () => {
        const newAnecdote = await request(app)
            .post('/api/anecdotes')
            .send({
                title: 'Test Anecdote to Update',
                date: '2024-11-22',
                content: 'This is an anecdote to be updated',
            });
        const res = await request(app)
            .put(`/api/anecdotes/${newAnecdote.body.id}`)
            .send({
                content: 'Updated Anecdote Content',
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('content', 'Updated Anecdote Content');
    });

    it('should delete an anecdote', async () => {
        const newAnecdote = await request(app)
            .post('/api/anecdotes')
            .send({
                title: 'Test Anecdote to Delete',
                date: '2024-11-23',
                content: 'This is an anecdote to be deleted',
            });
        const res = await request(app)
            .delete(`/api/anecdotes/${newAnecdote.body.id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Anecdote deleted successfully');
    });
});