/*****
In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
*****/
function permutations(string) {
  let array = string.split(''); 
  return [...new Set(permute(array).map(v => v.join('')))]
}

function permute(arr) {
    let results = [];
    const repeat = (arr, letters =[]) => {
      if(arr.length === 0){
        results.push(letters);
      } else {
        for(let i = 0; i < arr.length; i++) {
          let copy = arr.slice();
          let letter = copy.splice(i, 1);
          repeat(copy.slice(), letters.concat(letter) )
        }
      }
    }
    repeat(arr);
    return results;
}
