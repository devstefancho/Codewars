/*
Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19
*/


function sumIntervals(intervals){
  //TODO
  // arrange array by left value
  intervals.sort((a, b) => a[0]-b[0]);
  // console.log(intervals);
  
  let lastMin, lastMax = 0;
  const newRange = [];
  intervals.map((range, idx) => {
  // reduce range ,save first time min and max value
    let currentMin = parseInt(range[0]);
    let currentMax = parseInt(range[1]);
    if(idx === 0) { 
      lastMin = currentMin;
      lastMax = currentMax;
      newRange.push([currentMin, currentMax]);
      return;
    }
    // overlapped occurred, then update newRange array and update last value
    // [10, 20], [13, 15]
    // [10, 20], [19, 25]
    if(lastMax > currentMin){
      newRange.pop();
      lastMin = (lastMin < range[0]) ? lastMin : range[0];
      lastMax = (lastMax > range[1]) ? lastMax : range[1];
      newRange.push([lastMin, lastMax]);
    }
    // [10, 20], [21, 23] overlapped not occurred ,then update last value
    else if(lastMax < currentMin) {
      //console.log('push: ', range)
      lastMin = currentMin;
      lastMax = currentMax;
      newRange.push(range);
    }
  })
  //console.log('newRange: ',newRange);
  
  // calculate sum of range
  const result = newRange.reduce((sum, element, idx) => {
    let interval = element[1] - element[0];
    return (sum + interval);
  }, 0);
  
  //console.log('result: ', result);
  return result;
}
