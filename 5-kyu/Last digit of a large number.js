/*****
Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^ba 
b
 . Note that aaa and bbb may be very large!

For example, the last decimal digit of 979^79 
7
  is 999, since 97=47829699^7 = 47829699 
7
 =4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2 
200
 ) 
2 
300
 
 , which has over 109210^{92}10 
92
  decimal digits, is 666. Also, please take 000^00 
0
  to be 111.

You may assume that the input will always be valid.

Examples
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10","10000000000")  // returns 0
*****/
var lastDigit = function(str1, str2){  
  if(str2 === '0') return 1;
  
  const obj = { '0': [0]};
  for(let i = 1; i < 10 ; i++) {
    obj[i] = [];
    for(let j = 1; j < 100; j++){
      let num = (Math.pow(i, j)) % 10;
      if(obj[i].find(v => v === num)){ break; }
      obj[i].push(num);
    }
  }
  
  let str1LastNum = parseInt(str1[str1.length - 1]);
  let str1LastNumObj = obj[str1LastNum];
  let str2Mod = parseInt(str2) % str1LastNumObj.length;
  let modIndex = str2Mod;
  if(obj[str1LastNum].length === 1) {return obj[str1LastNum][0]}

  let result = obj[str1LastNum][modIndex];

  let mod = str1LastNumObj.length;
  let str2Arry = str2.split('');

  for( let i = 0; i < str2.length - 1 ; i++){
    let int = parseInt(str2Arry.splice(0, 2).join('')) 

    let mode = int % mod

    str2Arry.unshift(mode);
    
  }

  let resultIndex = str2Arry[0] % mod - 1;
  resultIndex = resultIndex === -1 ? mod - 1 : resultIndex;
  return obj[str1LastNum][resultIndex]

}
