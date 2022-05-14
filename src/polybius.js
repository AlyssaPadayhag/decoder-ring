// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  /* polybius square object with key values to work with! */
  const polySquare = {
    'a':'11', 'b':'21', 'c':'31', 'd':'41', 'e':'51',
    'f':'12', 'g':'22', 'h':'32', 'i':'42', 'j':'42', 'k':'52',
    'l':'13', 'm':'23', 'n':'33', 'o':'43', 'p':'53',
    'q':'14', 'r':'24', 's':'34', 't':'44', 'u':'54',
    'v':'15', 'w':'25', 'x':'35', 'y':'45', 'z':'55'
   }

  function polybius(input, encode = true) {

  /* INITIAL DECLARATIONS
  working with lowercase input and splitting it into an array,
  to work with each inidividual character
  */
  let userInputArray = input.toLowerCase().split('');
  let result = '';

  /* ERROR HANDLING: if there is no input, do not continue code */
  if (!input) return false;

  /* ENCODING:
      1) should encode a message by translating each letter to number pairs √ 
      2) should translate both 'i' and 'j' to 42 √ 
      3) should leave spaces as is √ 

      - looping thru each character in the user input and using a switch case
      - if the character is an "i" or "j", use value in polySquare ["i"] which is 42 (same as j)
      - if it is a space, keep the space
      - if any other character, gets the [key, value] of the polySquare
          if the character is equal to the pair[0] (key), add the match value to result
  */
  if (encode) {
    userInputArray.forEach((character, i) => {
         character = userInputArray[i];

        switch (character) {
          case 'i':
          case 'j':
            result += polySquare['i'];
            break;
          case ' ':
            result += ' ';
            break;
          default:
            let match = Object.entries(polySquare).find((pair) => character === pair[0]);
            result += match[1];
        }
      });

    /* DECODING:
      4) should decode a message by translating each pair of numbers into a letter √
      5) should translate 42 to both 'i' and 'j' √
      6) should leave spaces as is √
      7) should return false if the length of all numbers is odd √

      - testing if the encoded message is an even value - since decoding will need a 2 digit code
      - code of the element 0 and element 1
      - if it is a space, add it to the result, and decrease the index by 1
          so if it loops bacl, it will increment by 2, checking the next pair of numbers
      - if the code is 42, send back both i and j
      - if any other number pair, gets the [key, value] of the polySquare
          if the code is equal to the pair[1] (value), add the key letter match to result

    */
  } else {
    let oddTestNumber = 0;
    userInputArray.forEach((key) => { if (key !== ' ') oddTestNumber++; });
    if (oddTestNumber % 2 !== 0) return false;

    for (let i = 0; i < input.length; i += 2) {
        let code = `${input[i]}${input[i + 1]}`;
        if (code.includes(' ')) {
            result += ' ';
            i-=1;
        } else if (code === '42') {
            result += '(i/j)';
        } else {
            let match = Object.entries(polySquare).find((pair) => code === pair[1]);
            if (match) {
                result += match[0];
            }
        }
    }
}
return result; 
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };