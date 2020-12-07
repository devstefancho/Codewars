/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
  //Code here
  let result = str.split(' ').map( word => {
    let letter = /[A-z]/g.test(word);
    if(letter) {
      return word.slice(1) + word[0] + 'ay'
    }
    return word;
  })
  return result.join(' ');
}
