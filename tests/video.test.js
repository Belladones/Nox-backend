// tests/video.test.js
const request = require('supertest');
const app = require('../index');

describe('Video API', () => {
    it('should create a new video', async () => {
        const res = await request(app)
            .post('/api/videos')
            .send({
                title: 'Test Video',
                date: '2024-11-20',
                link: 'https://example.com/video.mp4',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('title', 'Test Video');
    });

    it('should fetch all videos', async () => {
        const res = await request(app)
            .get('/api/videos');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should fetch a single video by ID', async () => {
        const newVideo = await request(app)
            .post('/api/videos')
            .send({
                title: 'Test Video for Fetch',
                date: '2024-11-21',
                link: 'https://example.com/video-fetch.mp4',
            });
        const res = await request(app)
            .get(`/api/videos/${newVideo.body.id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title', 'Test Video for Fetch');
    });

    it('should update a video', async () => {
        const newVideo = await request(app)
            .post('/api/videos')
            .send({
                title: 'Test Video to Update',
                date: '2024-11-22',
                link: 'https://example.com/video-update.mp4',
            });
        const res = await request(app)
            .put(`/api/videos/${newVideo.body.id}`)
            .send({
                title: 'Updated Video Title',
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title', 'Updated Video Title');
    });

    it('should delete a video', async () => {
        const newVideo = await request(app)
            .post('/api/videos')
            .send({
                title: 'Test Video to Delete',
                date: '2024-11-23',
                link: 'https://example.com/video-delete.mp4',
            });
        const res = await request(app)
            .delete(`/api/videos/${newVideo.body.id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Video deleted successfully');
    });
});
