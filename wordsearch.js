const wordSearch = (letters, word) => {

  
  if (letters === []) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }

  for (let row = 0; row < horizontalJoin.length; row++) {
    let array = [];
    for (let col = 0; col < horizontalJoin[row].length; col++) {
      array.push(horizontalJoin[col][row]);
    }
    let newArray = array.join('');
    if (newArray.includes(word)) {
      return true;
    }
  }
  return false;
};


module.exports = wordSearch;