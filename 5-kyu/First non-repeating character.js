/*********
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
**********/
function firstNonRepeatingLetter(s) {
  let sLower = s.toLowerCase();
  let obj = {};
  // Object에 갯수 입력
  sLower.split('').forEach( letter => {
    obj[letter] = obj[letter] ? obj[letter] + 1 : 1;
  })
  // 소문자로 다 등록해둠, 1개인것들만 필터 및 첫번째 항목찾음
  let result = Object.keys(obj)
                .find(letter => obj[letter] === 1)
  // 항목의 소문자에서 인덱스를 참고하여 원래(s)의 인덱스 문자를 리턴
  let idx = sLower.indexOf(result);
  
  return s[idx] || '';
}
