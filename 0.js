const R = require('ramda');

const processSentence = str => {
    const lower = str.toLowerCase();
    const words = lower.split(' ');
    words.reverse();
    for (let i in words) {
        words[i] = words[i].trim();
    }
    let keepers = []
    for (let i in words) {
        if (words[i].length > 3) {
            keepers.push(words[i]);
        }
    }
    return keepers.join('');
}

const processSentenceRamda = R.pipe(
    R.toLower,
    R.split(' '),
    R.map(R.trim),
    R.reverse,
    R.filter(x => x.length > 3),
    R.join('')
);

console.log(processSentence("Hello my dear FRIEND"));
console.log(processSentenceRamda("Hello my dear FRIEND"));