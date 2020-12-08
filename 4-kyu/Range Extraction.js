/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
*/

function solution(list){
  let temp = [list[0]]; // temp = list[0]의 경우, 첫 push에 TypeError 발생
  let result = [];
  for( let i = 0; i < list.length; i++) {
    if(list[i + 1] !== list[i] + 1) {
      result.push(temp)
      temp = [];
    }
    temp.push(list[i + 1]);
  }

  result = result.reduce((acc, el) => {
    if(el.length > 2) {return [...acc, `${el[0]}-${el[el.length - 1]}`]}
    if(el.length === 2) {return [...acc, ...el]}
    return [...acc, el]
  },[])

  return result.join(',')
}
