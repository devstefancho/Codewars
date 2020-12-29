/********
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1
nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil
********/

function nextBigger(n){
  let num = n.toString().split('');
  let idx = -1;
  let len = num.length;
  for( let i = (len - 1) ; i > 0 ; i--) {
    let current = num[i];
    let next = num[i - 1];
    if(next < current) {
      idx = i - 1;
      break;
    }
  }
  if(idx === -1) {return idx;}
  
  let first = num.slice(0, idx);
  let second = num.slice(idx);
  let pivot = second.shift();
  second.sort((a, b) => (a - b));
  for(let i = 0; i < second.length ; i++) {
    if(second[i] > pivot) {
      let temp = second[i];
      second[i] = pivot;
      pivot = temp;
      break;
    }
  }
  let result = first.join('') + pivot + second.join('')
  
  return parseInt(result);
}
