import { addToArrayForm } from './../../javascript/leetcode/addToArrayForm.js';

describe('testing addToArrayForm', () => {

    it('firstUniqChar should array', () => {
        expect(addToArrayForm([1,2,0,0], 34)).toEqual(["1", "2", "3", "4"]);
    });
});
