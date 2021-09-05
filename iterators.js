let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
let Punctuation = [".", "!"]
//Code
let storyWords = story.split(' ');
  console.log(storyWords.length);
let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));
console.log(('The word count is: ') + betterWords.length);

const countWords = (betterWords, query) => {
  let count = 0;
  for(let i = 0; i < betterWords.length; i++) {
    if(betterWords[i] === query ) {
      count++;
    }
  } return count
};
const cW = countWords;
const bW = betterWords;
//console.log(countWords(betterWords,'really') +countWords(betterWords,'very') + countWords(betterWords,'basically') );
console.log(('The number of overused words is: ') + (cW(bW, 'really') + cW(bW, 'very') + cW(bW, 'basically')));
let sC = story.split(''); // storyCharacters
const sentences = (sC, query) => {
  let count1 = 0;
  for(let j= 0; j < sC.length; j++) {
    if(sC[j] === query) {
      count1++;
    }
  } return count1;
};
console.log(('The number of sentences is: ') +(sentences(sC, ".") + (sentences(sC, "!"))));
console.log((`The word "really" is used ${cW(bW, 'really')} times`));
console.log((`The word "very" is used ${cW(bW, 'very')} times`));
console.log((`The word "basically" is used ${cW(bW, 'basically')} times`));
console.log('');
console.log(bW.join(' '));