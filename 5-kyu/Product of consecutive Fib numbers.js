/*
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prodyou will return

[F(m), F(m+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(m) being the smallest one such as F(m) * F(m+1) > prod.

Some Examples of Return:
(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 

*/

function productFib(prod){
  
  let arr = [0, 1];
  let lastValue = (arr[0] + arr[1]);
  let idx = 0;
  let multiValue = (lastValue * arr[idx+1]);
  
  // 마지막 곱이 prod보다 클때까지 피보나치 수열 찾기
  while(prod > multiValue) {
    lastValue = arr[idx] + arr[idx+1];
    multiValue = lastValue * arr[idx+1];
    arr.push(lastValue);
    idx++;
    // prod와 마지막곱의 값이 같은경우는 빠져나옴
    if(prod === multiValue) { break; }
  }
  
  // return할 값들 정리
  let result = (multiValue === prod);
  let arrBeforeLast = arr[arr.length-2];
  let arrLast  = arr[arr.length-1];
  
  return [arrBeforeLast, arrLast, result];
  
}
