const wordSearch = function(letters, word) {

  if (word === "" || letters.length === 0 || typeof word !== `string`) {
    return false;
  }
  word = word.toUpperCase();
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  const reversedHorizontal = letters.map(ls => ls.slice().reverse());
  const horizontalReversedJoin = reversedHorizontal.map(ls => ls.join(''));
  for (const l of horizontalReversedJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  for (let i = 0; i < letters[0].length; i++) {
    const verticalJoin = letters.map(ls => ls[i]).join('');
    if (verticalJoin.includes(word))
      return true;
  }
  
  const reversedLetters = letters.slice().reverse(); 
for (let i = 0; i < reversedLetters[0].length; i++) {
    const reversedVertical = reversedLetters.map(ls => ls[i]).join('');
    if (reversedVertical.includes(word))
      return true;
  }

  return false;
};


module.exports = wordSearch;