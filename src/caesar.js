// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  /* The alphabet to work with, and splitting it - cause I ain't typing all that LOL*/
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  function caesar(input, shift, encode = true) {
    // your solution code here

    /* NOTES:
        - spaces should be maintained throughout, as should nonalphabetic symbols
        - capital letters can be ignored
        - if a letter is shifted so that it goes "off" the alphabet ( shift of 3 on letter z)
            it should wrap around to the front of the alphabet (z becomes c)
    */

    /* ERROR HANDLING: shift value is not present, = 0, < -25, >25 */
    if (!shift || shift == 0 || shift < -25 || shift > 25) {
      return false
    }

    /* ENCODE or DECODE */ 
    shift *= encode ? 1 : -1;

    /* ENCODING and DECODING:
      1) should encode or decode a message by shifting the letters  √ 
      2) should leaves spaces and other symbols as is  √ 
      3) should ignore capital letters  √ 
      4) should appropriately handle letters at the end of the alphabet  √ 
      5) should allow for a negative shift that will shift to the left  √ 
    */
  
    return result = input.toLowerCase() // input all into lowercase letters
                         .split('') // split each letter, space, punctuation, into its own element
                         .map((character) => shifting(character, shift)) // create a new array from results of the shifting helper funtion
                         .join('');// join all characters together - storing the value in result and returning it

    /* shifting helper function to do all the work!
      - if it is not a character (space, punctuation, etc), return it into the mapped array
      - checks next element
      - index: inputted character > checking where it is in the alphabet's index
      - shifted: example shift of 3 > index of character "z" is 25. (((25 + 3) % 26) +26) % 26
          using modulo (%) will loop thru the alphabet so z shifted is c
      - return the shifted character
    */
    function shifting(character, shift) {
      if (!character.match(/[a-z]/)) return character;

      let index = alphabet.indexOf(character);
      let shifted = (((index + shift) % 26) + 26) % 26;

      return alphabet[shifted];
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
