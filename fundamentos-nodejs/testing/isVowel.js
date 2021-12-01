const assert = require('assert');
const isVowel = require('.');
// console.log(assert);
const tests = [];
const test = (name, fn) => tests.push({name, fn});

let failures = 0;

test('isVowel retorna true para input "a"', () => {
    assert.ok(isVowel('a'));   
});

// console.log('isVowel retorna true para input "a"');
// try {
//     assert.ok(isVowel('a'));    
// } catch (error) {
//     console.error('Fail');
//     failures += 1;
// }

// if (isVowel('a') === true) {
//     console.log('OK');
// } else {
//     console.error('FAIL');
//     failures += 1;
// }

test('isVowel retorna false para input "c"', () => {
    assert.equal(isVowel('c'), false);   
});

// console.log('isVowel retorna false para input "c"');
// try {
//     assert.equal(isVowel('c'), false);    
// } catch (error) {
//     console.error('Fail');
//     failures += 1;
// }

// if (isVowel('c') === false) {
//     console.log('OK');
// } else {
//     console.error('FAIL');
//     failures += 1;
// }

tests.forEach(({name, fn}) => {
    console.log(name);
    try {
        fn();
    } catch (error) {
        console.error(`Expencted ${error.expected} but got ${error.actual}`);
        failures += 1;
    }
});

if (failures > 0) {
    console.error('Tests failed');
    process.exit(1);
}