/****
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
****/
function incrementString (strng) {

  if(strng.length === 0) return '1';
  let flag = false;
  let result = strng.split('').reverse().map((v, idx) => {
    if(Number.isInteger(parseInt(v))) {
      if(idx === 0 || flag) {
        let sum = parseInt(v) + 1;
        flag = (sum === 10);
        return flag ? 0 : sum;
      } else { 
        return v;
      }
    } else {
      if(idx === 0 || flag) { flag = false; return v + 1; }
      return v;
    }
  })
  return result.reverse().join('')
}
