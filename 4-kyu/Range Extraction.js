/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
*/

function extractRange(range, result) {
  if((range.length >= 3)) {
    let newRange = `${range[0]}-${range[range.length-1]}`;
    result.push(newRange);
  } else {
    result.push(...range);
  }
}

function solution(list){
  // TODO: complete solution 
  let result = [];
  list.reduce((range, num, idx) => {

    let lastNumber = range[range.length - 1];
    let consecutive = lastNumber + 1 === num;
    let lastIndex = idx === list.length - 1;
    let firstIndex = range.length === 0;
    // first time
    if(firstIndex) { return [num]; } 
    if(lastIndex) {
      if(consecutive) { // consecutive
        range.push(num);
        extractRange(range, result);
      } else {                     // not consecutive
        extractRange(range, result);
        result.push(num);
      } 
      return null; // end last reduce
    }
    if(consecutive) { // consecutive 
      range.push(num);
      return range; 
    } else { // not consecutive
      extractRange(range, result);
      return [num];
    }
  }, [])

  return result.join(',');
}
