/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

var maxSequence = function(arr){
  let result, max = 0;
  // copy arr for shifting array
  let arrClone = Array.from(arr);
  arr.map(v => {
    //reduce and store max value
    //console.log(arrClone);
    arrClone.reduce 
      ? arrClone.reduce((sum, number) => {
          sum + number > max ? max = sum + number : max; 
          return sum + number;
          },0) 
      : 0; 
    //shift array clone for next iteration
    arrClone.shift();
  })
  
  //  console.log(arr)
  return max;
}
