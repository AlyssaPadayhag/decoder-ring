// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const normalAlpha = 'abcdefghijklmnopqrstuvwxyz';

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    /* NOTES:
      - The input could include spaces and letters as well as special characters such as #, $, *, etc.
      - Spaces should be maintained throughout.
      - Capital letters can be ignored.
      - The alphabet parameter must be a string of exactly 26 characters, which could include
          special characters such as #, $, *, etc. Otherwise, it should return false.
      - All the characters in the alphabet parameter must be unique. Otherwise, it should return false.
    */
      
      let result = '';
      let userInput = input.toLowerCase();


      /* ERROR HANDLING:
      1) should return false if the substitution alphabet is missing  √ 
      2) should return false if the substitution alphabet is not exactly 26 characters  √ 
      3) should return false if the substitution alphabet does not contain unique characters  √ 
      */
      
      if (!alphabet) {
          return false;
      }
     
      if (alphabet.length !== 26) {
          return false;
      }

      for (let i in alphabet) {
        if (alphabet.lastIndexOf(alphabet[i]) != i) { // checks if any character in alphabet repeats
          return false;
        }
      }

     /* ENCODING and DECODING: 
      4) should encode or decode a message by using the given substitution alphabet √
      5) should work with any kind of key with unique characters √
      6) should preserve spaces √

      - checks if there is a space for either encode or decode in the first user input element
      - checking to see if message needs to be encoded or decoded
      - matches character and adds it to result
     */

      for (let i = 0; i < userInput.length; i++) {
          if (userInput[i] === ' ') {
              result += ' ';
          } else {
              let normAbc = normalAlpha;
              let abc = alphabet;
              if (!encode) {
                  normAbc = alphabet;
                  abc = normalAlpha;
              };
  
              for (let j = 0; j < normAbc.length; j++) {
                  if (userInput[i] === normAbc[j]) {
                      result += abc[j];
                  }
              }
          }
      }   
      return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };


/*



    decoding a message
      7) should decode a message by using the given substitution alphabet
      8) should work with any kind of key with unique characters
      9) should preserve spaces





*/