/*
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/
function validParentheses(parens){
  //TODO
  const arry = parens.split('');
  let result = true;
  let acc = [];
  while(arry.length > 0 && result) {
    let c = arry.shift();
    if(c === '(') {
      acc.push(c)
    } 
    // pop을 함, 
    else {
      // acc:[] , c:')' 인 경우
      if(acc.length === 0) {
        result = false;
      }  
      else {
        // pop하는 경우,
        if(c === ')') {
          acc.pop();
        }
      }
    }
  }
  //console.log(acc)
  // ()()()(( 인 경우, while에서 arry가 모두 shift되서, while을 빠져나옴
  if(result){ result = (acc.length > 0) ? false : true;}
  return result;
}
