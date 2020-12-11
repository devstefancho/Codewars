/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/
function generateHashtag (str) {
  // blank case
  let blank = str.replace(/ /g, '');
  if(blank.length === 0) return false;

  let strArray = str.split(/ /g);
  let filtered = strArray.filter(v => v.length)
  let words = filtered.map( word => {
    return `${word[0].toUpperCase()}${word.slice(1)}`
  })
  let hashTag = `#${words.join('')}`
  let result = hashTag.length > 140 ? false : hashTag;
  return result

}
