// it takes 38ms
/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

var maxSequence = function(arr){
  // declaration
  let result, max = 0;
  let arrSet, arrClone = Array.from(arr);
  
  // shift array clone for next iteration
  arrSet = arr.map((v, idx) => { 
    if(idx !==0) arrClone.shift();
    return Array.from(arrClone);
  }) 
  
  // reduce and store max value
  arrSet.forEach(arry => {arry.length
                 ? arry.reduce((sum, number) => {
                      let acc = sum + number;
                      max = (max > acc) ? max : acc;
                      return acc;
                    },0) 
                 : 0; })
  // result
  return max;
}
