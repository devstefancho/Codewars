/*******
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
*******/

snail = function(array) {
  let result = [];
  while(array.length > 1) {
  const {arrayCopy, arr} = travel(result, array);
    result = [...arr];
    if(array.length === 1) { break; }
    array = [...arrayCopy];
  }
  result = array.length ? [...result, ...array[0]] : result;
  return result
} 

function travel(arr, array) {
  let arrayCopy = array.map(item => [].concat(item));
    arr = arr.concat(arrayCopy.shift());
    for(let i = 0; i < arrayCopy.length - 1; i++) {
      arr.push(arrayCopy[i].pop());
    }
    arr = arr.concat(arrayCopy.pop().reverse());
    for(let i = arrayCopy.length - 1; i >= 0; i--) {
      arr.push(arrayCopy[i].shift());
    }
  return { arrayCopy: arrayCopy, arr: arr };
}
