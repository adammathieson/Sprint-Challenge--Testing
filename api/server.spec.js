const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
    describe('get /', () => {
        it('should return test string', async () => {
            const res = await request(server).get('/')
            expect.stringContaining('Server is running')
        })
    })
})