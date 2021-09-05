//PRACTICE PRACTICE PRACTICE!!
//Javascript module
console.log('day 1');
// Double slash comments single lines
/*
Slash followed by an Asterisk 
Comments multiple
lines of code
*/
console.log (27);
console.log('Hello'.length); //Prints 5 because the word contains 5 characters.
console.log('Teaching the world how to code'.length); //Prints 30
var test1 = 'test string';
console.log(test1); //Will Print "test string"
// To comment an entire line use command + backslash
console.log(' ')

//Friday Aug 27
//If and Else if statements
let sale = true; 
if(sale) {
    console.log('Time to buy!');
} else {
    console.log('Time to wait for a sale.')
}
//Comparison operators include less <, greater >, <=, >=, equal to ===, not qual to !==
let hungerLevel = 7;
if (hungerLevel > 7) {
    console.log('Time to eat!')
} else {
    console.log('We can eat later!')
}
//Logical statements to compare booleans, and &&, or ||, not !
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
    console.log('time to sleep')
} else {
    console.log('not bed time yet')
} //Prints 'not bed time yet'
//NOTE: BOOLEANS DEFAULT TO TRUE
//Truthy and Falsy
let wordCount = 5;

if (wordCount) {
    console.log("Great! You've started your work!");
} else {
    console.log('Better get to work!');
} //Prints "Great! You've started your work!'

let favoritePhrase = '';

if (favoritePhrase) {
    console.log("This string doesn't seem to be empty.");
} else {
    console.log('This string is definitely empty.');
} // Prints 'This string is definitely empty.'

//Truthy and Falsy Assignment
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`); // prints 'marker'

// Ternary Operations AKA Refactor AKA shorten that bitch
let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}
//both of the above operations will print the same line to the terminal
let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
    console.log('I love that!');
} else {
    console.log("I don't love that!");
}
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//Else if statements
let season = 'summer';

if (season === 'spring') {
    console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') { 
    console.log('It\'s winter! Everything is covered in snow.')
} else if (season === 'fall') {
    console.log('It\'s fall! Leaves are falling!')
} else if (season === 'summer') {
    console.log('It\'s sunny and warm because it\'s summer!')
} else {
    console.log('Invalid season.');
}
// The Switch keyword for else if statements
let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
        console.log('Tomatoes are $0.49');
    break;
  case 'lime':
        console.log('Limes are $1.49');
    break;
  case 'papaya':
        console.log('Papayas are $1.29');
    break;
  default:
        console.log('Invalid item');
    break;
}
 
// Prints 'Papayas are $1.29'


            /* GIT
git init - new repository
git status - checks contents of working directory and staging area
git add - adds files from the working directory to the staging area
git diff -  shows difference between the working directory and staging area
git commit - permanently saves your changes to the repository. include -m " " followed by comments of changes added.
git log - shows all previous commits with respective commentary
git show HEAD - shows the most recent commit, highlighting in green the recent changes to the document.
git checkout HEAD filename - discards any changes to file since last commit
git reset HEAD filename - if file is in staging area, removes from staging area, resets called file to last saved commit
git reset "frist 7 characters in commit" - goes back to everything that was saved up to that point.
git add . - adds all files to the staging area.
git branch - shows you what branch you are currently working in
git branch branchname - creates a new branch using the name used in operation
git checkout branchname - switches to desired branch
git merge branchname - merges additional branch with master branch
git branch -d branchname - deletes a branch

git clone: Creates a local copy of a remote.
git remote -v: Lists a Git project’s remotes.
git fetch: Fetches work from the remote into the local copy.
git merge origin/master: Merges origin/master into your local branch.
git push origin <branch_name>: Pushes a local branch to the origin remote.
*/

 /*8/30 learning bootstrap basics
    bootstrap breakpoint naming
    <div class="col-sm-8">
    </div>
    the breakpoint can be sm, md, lg, or xl
    when no breakpoint is selected, x small is default.
    <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-3">
    </div>
    differernt formatting for the same column based on screen size
    */

/* Recreating Piet Mondrain's Coposition II using bootstrap grid fundamentals
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css" type="text/css">
    <title>Composition II in Red, Blue, and Yellow</title>
  </head>
  
  <body>
    <div class="container">

    <div class="row">
      <div class="col-3">
        <div id="a" class="row">
        <!-- Piece A -->
        </div>
        <div id="b"  class="row">
        <!-- Piece B -->
        </div>
      </div>
      <div class="col">
        <div id="c" class="row">
        <!-- Piece C -->
        </div>
      </div> 
    </div>

    <div class="row">
      <div id="d" class="col-3">
        <!-- Piece D -->
      </div>

      <div id="e" class="col-8">
        <!-- Piece E -->
      </div>
        <div class="col-1">
          <div id="f" class="row">
            <!-- Piece F -->
          </div>
          
          <div id="g" class="row">
            <!-- Piece G -->
          </div>
        </div>
    </div>
  </div>
    

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>
*/
//bootstrap button layouts - last before bed

//8-31 good bye august
/*
  finished bootstrap course. try to bootstrap first project this weekend.
*/
//9-1 SEPTEMBER!!!! back to javascript course
//Sleep Debt Calculator, create a new document using terminal, 
//9-2 Scopes,Arrays
/*
.length when logging an array will show you the total ammount of variables within the array
  const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
  console.log(objectives.length)
  //output will be 3
.push() will add an item to the end of an array
.pop() will remove the last item of an array
LOOPS
for loop
  const vacationSpots = ['Bali', 'Paris', 'Tulum'];
  for (let i = 0; i < vacationSpots.length; i++){
    console.log('I would love to visit ' + vacationSpots[i])};
*/
//9-4 Iterators
/*

.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
.map() executes the same code on every element in an array and returns a new array with the updated elements.
.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
.findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
.reduce() iterates through an array and takes the values of the elements and returns a single value.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250; 
  });
console.log(smallNumbers);

break;

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length >7
});
console.log(longFavoriteWords)

break;

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);
  
console.log(secretMessage.join(''));

break;

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => number/100);

console.log(smallNumbers);

break;

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});
console.log(foundAnimal)

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

console.log(startsWithS)

break;

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10)
console.log(newSum);

break;
fill in the correct method that will correct the errors:
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);

break;

*/