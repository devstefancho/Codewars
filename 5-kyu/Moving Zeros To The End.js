/* 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
  let zeros = [];
  let result = arr.reduce((acc, el) => {
   if(el !== 0) return [...acc, el]
   if(el === 0) {zeros.push(el); return acc}
  }, [])
  return [...result, ...zeros]
}
