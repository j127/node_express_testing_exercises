const app = require('../app');
const supertest = require('supertest');
const cheerio = require('cheerio');

describe('html response', () => {

    let request;
    beforeEach(() => {
        request = supertest(app)
            .get('/')
            .set('User-Agent', 'my testing browser')
            .set('Accept', 'text/html');
    });

    it('returns an html response', done => {
        request
            .expect('Content-Type', /html/)
            .expect(200)
            .end(done);
    });

    it('returns your User Agent', done => {
        request
            .expect(res => {
                const htmlResponse = res.text;
                const $ = cheerio.load(htmlResponse);
                const userAgent = $('.user-agent').html().trim();

                if (userAgent !== 'my testing browser') {
                    throw new Error('User Agent not found');
                }
            })
            .end(done);
    });

});
