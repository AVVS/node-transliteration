const hasOwnProperty = Object.prototype.hasOwnProperty;
const a = Object.create(null, {
  Ё: {
    value: 'Yo',
  },
  Й: {
    value: 'I',
  },
  Ц: {
    value: 'Ts',
  },
  У: {
    value: 'U',
  },
  К: {
    value: 'K',
  },
  Е: {
    value: 'E',
  },
  Н: {
    value: 'N',
  },
  Г: {
    value: 'G',
  },
  Ш: {
    value: 'Sh',
  },
  Щ: {
    value: 'Sch',
  },
  З: {
    value: 'Z',
  },
  Х: {
    value: 'H',
  },
  Ъ: {
    value: '',
  },
  ё: {
    value: 'yo',
  },
  й: {
    value: 'i',
  },
  ц: {
    value: 'ts',
  },
  у: {
    value: 'u',
  },
  к: {
    value: 'k',
  },
  е: {
    value: 'e',
  },
  н: {
    value: 'n',
  },
  г: {
    value: 'g',
  },
  ш: {
    value: 'sh',
  },
  щ: {
    value: 'sch',
  },
  з: {
    value: 'z',
  },
  х: {
    value: 'h',
  },
  ъ: {
    value: '',
  },
  Ф: {
    value: 'F',
  },
  Ы: {
    value: 'I',
  },
  В: {
    value: 'V',
  },
  А: {
    value: 'a',
  },
  П: {
    value: 'P',
  },
  Р: {
    value: 'R',
  },
  О: {
    value: 'O',
  },
  Л: {
    value: 'L',
  },
  Д: {
    value: 'D',
  },
  Ж: {
    value: 'Zh',
  },
  Э: {
    value: 'E',
  },
  ф: {
    value: 'f',
  },
  ы: {
    value: 'i',
  },
  в: {
    value: 'v',
  },
  а: {
    value: 'a',
  },
  п: {
    value: 'p',
  },
  р: {
    value: 'r',
  },
  о: {
    value: 'o',
  },
  л: {
    value: 'l',
  },
  д: {
    value: 'd',
  },
  ж: {
    value: 'zh',
  },
  э: {
    value: 'e',
  },
  Я: {
    value: 'Ya',
  },
  Ч: {
    value: 'Ch',
  },
  С: {
    value: 'S',
  },
  М: {
    value: 'M',
  },
  И: {
    value: 'I',
  },
  Т: {
    value: 'T',
  },
  Ь: {
    value: '',
  },
  Б: {
    value: 'B',
  },
  Ю: {
    value: 'Yu',
  },
  я: {
    value: 'ya',
  },
  ч: {
    value: 'ch',
  },
  с: {
    value: 's',
  },
  м: {
    value: 'm',
  },
  и: {
    value: 'i',
  },
  т: {
    value: 't',
  },
  ь: {
    value: '',
  },
  б: {
    value: 'b',
  },
  ю: {
    value: 'yu',
  },
});

function mapWords(char) {
  return hasOwnProperty.call(a, char) ? a[char] : char;
}

function transliterate(word) {
  return word.split('').map(mapWords).join('');
}

module.exports = transliterate;
