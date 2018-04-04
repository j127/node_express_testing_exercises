const capitalize = require('../capitalize');

const chai = require('chai');
const expect = chai.expect;

describe('capitalize', () => {

    // an example of code that runs before each test
    // beforeEach(() => {
    //     const thing = new Thing({
    //         a: 123,
    //         b: 456
    //     });
    // });

    it('capitalizes single words', () => {
        expect(capitalize('express')).to.equal('Express');
        expect(capitalize('cats')).to.equal('Cats');
    });

    it('makes the rest of the string lowercase', () => {
        expect(capitalize('javaScript')).to.equal('Javascript');
    });

    it('leaves empty strings alone', () => {
        expect(capitalize('')).to.equal('');
    });

    it('leaves strings with no words alone', () => {
        expect(capitalize('   ')).to.equal('   ');
        expect(capitalize('123')).to.equal('123');
    });

    it('capitalizes multiple-word strings', () => {
        expect(capitalize('this is a Sentence.')).to.equal('This is a sentence.');
        expect(capitalize('i like JS.')).to.equal('I like js.');
    });

    it('leaves already-capitalized words alone', () => {
        expect(capitalize('Express')).to.equal('Express');
        expect(capitalize('Node')).to.equal('Node');
    });

    it('throws an error if passed a number', () => {
        // wrapped in a function to prevent an error from crashing the test
        expect(() => capitalize(123)).to.throw(Error);
    });
});
