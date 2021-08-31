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

 