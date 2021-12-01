exports.isVowel = char => {
    if (typeof char !== 'string') {
        throw TypeError('Arg must be a string');
    }

    if (char.length !== 1) {
        throw Error('Arg length must be 1');
    }

    return 'aeiou'.includes(char);
};

exports.countVowels = str => [...str].reduce(
    (memo, char) => (
        memo.hasOwnProperty(char)
            ? { ...memo, [char]: memo[char] + 1 }
            : memo
    ),
    { a: 0, e: 0, i: 0, o: 0, u: 0 },
);

