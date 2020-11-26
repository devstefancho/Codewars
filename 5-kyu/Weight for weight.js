/* My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
Don't modify the input
For C: The result is freed. */

function orderWeight(strng) {
  // #1.first condition : ordered by string
  //console.log('input string: ',strng);
  let strOrder = strng.split(' ').sort();
  //console.log('strOrder: ', strOrder);
  // #2.second condition: sum of  digits
  function addDigit(str) {
    return str.split('').map(str => parseInt(str)).reduce((acc, el)=> acc+el, 0);
  }
  let sumOfDigit = strOrder.map(num => { 
    let arr = []; 
    arr.push(num); 
    arr.push(addDigit(num));
    return arr;
  })
  //console.log('sumOfDigit: ', sumOfDigit);
  
  // need to write bubble Sort
  // Reason: Node version8(codewars) has different algorithm compare to current Node
  function bubbleSort(arr){
    let len = arr.length;
    for (let i = 0; i < (len - 1); i++) {
      for(let j = 0; j < (len - 1 - i); j++) {
        if(arr[j][1] > arr[j+1][1]) {
          let temp = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = temp;
        }
      }
    }
   return arr;
}
 
  bubbleSort(sumOfDigit);
  //console.log('sumOfDigit: ', sumOfDigit);
  //console.log('sorted sumOfDigit: ', sumOfDigit);
  let result = sumOfDigit.map(num => num[0]).join(' ');
  //console.log('result: ', result); 
  return result;
}
