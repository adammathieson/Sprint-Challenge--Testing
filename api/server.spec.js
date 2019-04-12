const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
    beforeEach(async () => {
        await db(games).truncate()
    })

    describe('get /', () => {
        it('should return test string', async () => {
            const res = await request(server).get('/')
            expect.stringContaining('Server is running')
        })
    })

    describe('get /games', () => {
        it('should return status 200', async () => {
            const res = await request(server).get('/games')
            expect(res.status).toBe(200)
        })
        
        it('should return json', async () => {
            const res = await request(server).get('/games')
            expect(res.type).toBe('application/json');
        })
    })

    describe('post /games', () => {
        it('should status 201', async () => {
            const game = { title: 'Mario Bros', genre: 'Console'}

            let res = await request(server)
                .post('/games')
                .send(game)
            expect(res.status).toBe(201)
        })

        it('should return status 422 if no title or genre', async () => {
            const game = { genre: "Console"}

            let res = await request(server)
                .post('/games')
                .send(game)
            expect(res.status).toBe(422)
        })

        it('should return object', async () => {
            const game = { title: "game", genre: "something" }

            let res = await request(server)
                .post('/games')
                .send(game)
            expect(res.body.title).toEqual('game')
        }) 
    })
})