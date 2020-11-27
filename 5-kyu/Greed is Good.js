/*
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
*/

function score( dice ) {
  let count = {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
  };
  console.log('dice:', dice)
  let result = dice.reduce((score, value)=> {

    count[value] += 1;

    if(count[value] === 1){ 
      if(value === 1) { score += 100; }
      if(value === 5) { score += 50; }
    }
    else if(count[value] === 3) { 
      if(value === 1){ score = score + 1000 - 100 - 100; }
      if(value === 2){ score += 200; }
      if(value === 3){ score += 300; }
      if(value === 4){ score += 400; }
      if(value === 5){ score = score + 500 - 50 - 50; }
      if(value === 6){ score += 600; }
    }
    else { 
      if(value === 1) { score += 100; }
      if(value === 5) { score += 50; }
    }

    return score;
  }, 0)
  return result;
}
