describe('translitirates word correctly', () => {
  const transliterate = require('..');

  it('respects capital letters', () => {
    expect(transliterate('Вася')).toBe('Vasya');
    expect(transliterate('Юла')).toBe('Yula');
  });
});
