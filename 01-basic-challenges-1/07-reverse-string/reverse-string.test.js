const reverseString = require('./reverse-string');

test('Reversing a string', () => {
  expect(reverseString('JavaScript')).toBe('tpircSavaJ');
  expect(reverseString('12345')).toBe('54321');
  expect(reverseString('Hello')).toBe('olleH');

});
