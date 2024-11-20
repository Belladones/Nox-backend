// tests/article.test.js
const request = require('supertest');
const app = require('../index');

describe('Article API', () => {
    it('should create a new article', async () => {
        const res = await request(app)
            .post('/api/articles')
            .send({
                title: 'Test Article',
                date: '2024-11-20',
                content: 'This is a test article',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('title', 'Test Article');
    });

    it('should fetch all articles', async () => {
        const res = await request(app)
            .get('/api/articles');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should fetch a single article by ID', async () => {
        const newArticle = await request(app)
            .post('/api/articles')
            .send({
                title: 'Test Article 2',
                date: '2024-11-21',
                content: 'This is another test article',
            });
        const res = await request(app)
            .get(`/api/articles/${newArticle.body.id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title', 'Test Article 2');
    });

    it('should update an article', async () => {
        const newArticle = await request(app)
            .post('/api/articles')
            .send({
                title: 'Test Article to Update',
                date: '2024-11-22',
                content: 'This is an article to be updated',
            });
        const res = await request(app)
            .put(`/api/articles/${newArticle.body.id}`)
            .send({
                title: 'Updated Article Title',
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title', 'Updated Article Title');
    });

    it('should delete an article', async () => {
        const newArticle = await request(app)
            .post('/api/articles')
            .send({
                title: 'Test Article to Delete',
                date: '2024-11-23',
                content: 'This is an article to be deleted',
            });
        const res = await request(app)
            .delete(`/api/articles/${newArticle.body.id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Article deleted successfully');
    });
});
