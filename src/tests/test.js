const tape = require('tape');

tape('Testing tape', (t) => {
const expected = 1;
const accuual = 1;
t.equal(accuual, expected, 'Should return empty string');
t.end();
});
