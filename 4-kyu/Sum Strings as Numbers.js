/****
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
****/
function sumStrings(a,b) { 

  let regex = /[1-9].*$/
  let sum = '', remain = 0;
  a = a === '' ? 0 : a.match(regex)[0];
  b = b === '' ? 0 : b.match(regex)[0]; //case: 0412, 0032
  
  if(+a > +b) {
    const zeros = a.length - b.length;
    b = '0'.repeat(zeros) + b;
  } else {
    const zeros = b.length - a.length;
    a = '0'.repeat(zeros) + a;
  }

  for(let i = a.length - 1; i >= 0 ; i--) {
    let num = +a[i] + +b[i] + remain
    remain = num > 9 ? 1 : 0;
    sum = num.toString().slice(-1) + sum;
  }
  
  return remain === 1 ? remain + sum : sum;
}
