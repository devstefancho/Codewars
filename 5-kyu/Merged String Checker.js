/*******
At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 should be in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears
*******/
function isMerge(s, part1, part2) {
  if(s.length === (part1 + part2).length) {
    let [idx1, idx2, reset, result] = [0, 0, [], true];
    for(let i = 0 ; i < s.length ; i++){
      if(part1[idx1] === part2[idx2] ) { reset.push([i, idx1, idx2]); }
      if(s[i] === part1[idx1]) { idx1++; continue; } 
      if(s[i] === part2[idx2]) { idx2++; continue; } 
      if(reset.length > 0) { 
        [i, idx1, idx2] = reset.shift();
        idx2++;
        continue;
      } 
      result = false;
      break;
    }
    return result;
  }
  return false;
}
