const words = [];

const MALFORMATTED_ENDS = [' f', ' m', ' n'];

const parseHeadWord = (headword) => {
  let parsed = headword
    .replace(/<[^>]*>?/gm, '')
    .trim();

  const headwordEnd = parsed.slice(-2);
  if (MALFORMATTED_ENDS.includes(headwordEnd)) {
    MALFORMATTED_ENDS.forEach((malformatted) => {
      parsed = parsed.replace(malformatted, '');
    });
  }

  return parsed;
};

const parseDefinition = (headword, wordLine) => {
  let parsed = wordLine.innerHTML
    .replace(headword, '')
    .replace(/<[^>]*>?/gm, '')
    .replace('', '')
    .replace('&lt;', '<')
    .replace('&gt;', '>')
    .replace('&amp;', '&')
    .trim();

  const parsedHeadWord = headword.replace(/<[^>]*>?/gm, '').trim();
  const headwordEnd = parsedHeadWord.slice(-2);

  MALFORMATTED_ENDS.forEach((malformatted) => {
    if (headwordEnd === malformatted) {
      parsed = `${malformatted} ${parsed}`;
    }
  });

  return parsed;
};

document.querySelectorAll('.has-small-font-size').forEach((wordLine) => {
  const headword = wordLine.querySelectorAll('strong')[0].innerHTML;
  const word = {
    headword: parseHeadWord(headword),
    definition: parseDefinition(headword, wordLine),
    isCommon: wordLine.innerHTML.includes(''),
  };

  words.push(word);
});

console.log(words);
