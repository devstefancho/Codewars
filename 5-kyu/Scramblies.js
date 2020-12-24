/**********
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
**********/

function scramble(str1, str2) {
  //code me
  const str = str1 + ',' + str2;
  let obj = {};
  let count = 1;
  for( let i = 0; i < str.length; i++) {
    if(str[i] === ',') { count = -1; continue;}
    if(!obj[str[i]]) {
      obj[str[i]] = 0;
    }
    obj[str[i]] += count;
    if(obj[str[i]] < 0) { obj = false; break; }
  }
  //console.log(Boolean(obj))
  return Boolean(obj);
}
