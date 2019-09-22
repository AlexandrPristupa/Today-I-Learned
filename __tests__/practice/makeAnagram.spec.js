import { makeAnagram } from './../../javascript/practice/makeAnagram';

describe('testing makeAnagram', () => {

    it('should be return true', () => {
        expect(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')).toEqual(30);
    });
});
