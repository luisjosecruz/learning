const { isVowel, countVowels } = require('.');

describe('isVowel', () => {

    it('debería arrojar cuando se invoca sin string', () => {
        expect(() => isVowel()).toThrow(TypeError);
        // expect.assertions(1);
        // try {
        //     // isVowel();
        // } catch (error) {
        //     expect(error).toBeInstanceOf(TypeError);
        // }
    });

    it('debería arrojar cuando string no tiene length 1', () => {
        expect(() => isVowel('aaa')).toThrow('length must be 1');
    });
    
    it('debería retorna true para input "a"', () => {
        expect(isVowel('a')).toBeTruthy;   
    });

    it('debería retorna false para input "c"', () => {
        expect(isVowel('c')).toBe(false);   
    });
    
});

describe('countVowels', () => {
    it('deberia...', () => {
        expect(countVowels('abc')).toEqual({ a:1, e: 0, i: 0, o: 0, u: 0 });
    });
});