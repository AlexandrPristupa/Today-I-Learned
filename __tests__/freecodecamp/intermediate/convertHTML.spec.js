import { convertHTML } from '../../../javascript/freecodecamp/intermediate/convertHTML';

describe('testing convertHTML', () => {

    it('should be return Dolce &​amp; Gabbana', () => {
        expect(convertHTML("Dolce & Gabbana")).toEqual("Dolce &amp; Gabbana");
    });

    it('should be return Dolce &​amp; Gabbana', () => {
        expect(convertHTML("Hamburgers < Pizza < Tacos")).toEqual("Hamburgers &lt; Pizza &lt; Tacos");
    });

    it('should be return &​lt;&​gt;', () => {
        expect(convertHTML("<>")).toEqual("&lt;&gt;");
    });

    it('should be return abc', () => {
        expect(convertHTML("abc")).toEqual("abc");
    });

});
