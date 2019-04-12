const db = require('../database/dbConfig');
const Games = require('./games-model');

describe('games-model', () => {

    describe('getAll', () => {
        it('should return the full list of games', async () => {
            const games = await Games.getAll();
            expect(games).toHaveLength(3)
        })
    })
})