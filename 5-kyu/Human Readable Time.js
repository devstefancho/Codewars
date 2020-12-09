/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {

  let sec = seconds % 60;
  let min = (seconds / 60) % 60;
  let hr = seconds / 60 / 60;

  let result = [hr, min, sec].map( time => {
    let str = `0${Math.floor(time)}`
    return str.slice(str.length - 2);
  })
  
  return result.join(':')
}
