const app = require('../app');
const supertest = require('supertest');

describe('plain text response', () => {

    let request;
    beforeEach(() => {
        request = supertest(app)
            .get('/')
            .set('User-Agent', 'my testing browser')
            .set('Accept', 'text/plain');
    });

    it('returns a plain text response', done => {
        request
            .expect('Content-Type', /text\/plain/)
            .expect(200)
            .end(done);
    });

    it('returns your User Agent', done => {
        request
            .expect(res => {
                if (res.text !== 'my testing browser') {
                    throw new Error('Response does not contain User Agent');
                }
            })
            .end(done);
    });

});
