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
*/

// 9-5 OBJECTS
/*
pass by reference:

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};
// Write your code below
let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}
let remotelyDisable = obj => {
  obj.disabled = True ;
}
//console.log(spaceship);

break;

the use of this keyword to access the properties of an object within a property of that object, the this word gives the property access to the other information within the object.
const robot = {
  model : '1E78V2',
  energyLevel : 100,
  provideInfo() {
    return (`I am ${this.model} and my current energy level is ${this.energyLevel}.`);},
};
console.log(robot.provideInfo());
break; Factory Function
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}
const tinCan = robotFactory('P-500', true)
tinCan.beep()
*/
/* 9-6 more advanced ojects
Destructured Assignemnt
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 
can be shortened to this by using curly brackets:
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

break;
objects project
  const team = {
  _players: [
    {
    firstName: 'Alex',
    lastName: 'Franco',
    age: 27
    }, {
    firstName: 'Abraham',
    lastName: 'Hungria',
    age: 28
    }, {
    firstName: 'Anthony',
    lastName: 'Cruz',
    age: 29
    }
  ],
  _games: [
    {
    opponent: 'Panthers',
    teamPoints: 18,
    opponentPoints: 21 
    }, {
    opponent: 'Titans',
    teamPoints: 23,
    opponentPoints: 3 
    }, {
    opponent: 'Giants',
    teamPoints: 17,
    opponentPoints: 14 
    },
  ],
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game)
  }
  //
}; //end of object
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);
team.addGame('Jets', 47, 7);
team.addGame('Cowboys', 21, 21);
team.addGame('Dolphins', 14, 2);
console.log(team._games);
*/
//9-7 Transpilation with babel
/*
in terminal
1. npm init -adds package.json to project
2. touch .babelrc -creates the .babelrc file to the project folder
3. set up the configuration for babel in the .babelrc file in the project.
    {
    "presets": ["@babel/preset-env"]
    }
4.add the scripts to package.json, under the "test", dont forget the comma.
    "build": "babel src -d lib"
5. npm run build

HTML
-HTML stands for HyperText Markup Language and is used to create the structure and content of a webpage.
-Most HTML elements contain opening and closing tags with raw text or other HTML tags between them.
-HTML elements can be nested inside other elements. The enclosed element is the child of the enclosing parent element.
-Any visible content should be placed within the opening and closing <body> tags.
-Headings and sub-headings, <h1> to <h6> tags, are used to provide titles for sections of content.
-<p>, <span> and <div> tags specify text or blocks.
-The <em> and <strong> tags are used to emphasize text.
-Line breaks are created with the <br> tag.
-Ordered lists (<ol>) are numbered and unordered lists (<ul>) are bulleted.
-Images (<img>) and videos (<video>) can be added by linking to an existing source.
-For accessibility and compatibility, use the alt="" and leave it empty. if it has to stay on the html portion.


created the webpage.html document using the terminal. commit, merge push to git to continue the consistent practice of git
*/
/* 9/8 more html
-The <!DOCTYPE html> declaration should always be the first line of code in your HTML files. This lets the browser know what 
version of HTML to expect.
-The <html> element will contain all of your HTML code.
-On the first line of the html make sure to establish the language eg: lang="en" ; will help with accessibility.
-Information about the web page, like the title, belongs within the <head> of the page.
-You can add a title to your web page by using the <title> element, inside of the head.
-A webpage’s title appears in a browser’s tab.
-Anchor tags (<a>) are used to link to internal pages, external pages or content on the same page.
-You can create sections on a webpage and jump to them using <a> tags and adding ids to the elements you wish to jump to.
-Whitespace between HTML elements helps make code easier to read while not changing how elements appear in the browser.
-Indentation also helps make code easier to read. It makes parent-child relationships visible.
-Comments are written in HTML using the following syntax: <!-- comment -->.
*/
console.log("Today is Sept. 8. Front end dev course is at 9%");
/* 9/8 html Tables!
-The <table> element creates a table.
-The <tr> element adds rows to a table.
-To add data to a row, you can use the <td> element.
-Table headings clarify the meaning of data. Headings are added with the <th> element.
-Table data can span columns using the colspan attribute.
-Table data can span rows using the rowspan attribute.
-Tables can be split into three main sections: a head, a body, and a footer.
-A table’s head is created with the <thead> element.
-A table’s body is created with the <tbody> element.
-A table’s footer is created with the <tfoot> element.
-All the CSS properties you learned about in this course can be applied to tables and their data.
*/
// 9/9 semantic html
/*
-Semantic HTML introduces meaning to a page through specific elements that provide context as to what is in between the tags.
-Semantic HTML is a modern standard and makes a website accessible for people who use screen readers to translate the webpage and improves your website’s SEO.
- <header>, <nav> , <main> and <footer> create the basic structure of the webpage.
- <section> defines elements in a document, such as chapters, headings, or any other area of the document with the same theme.
- <article> holds content that makes sense on its own such as articles, blogs, comments, etc.
- <aside> contains information that is related to the main content, but not required in order to understand the dominant information.
- <figure> encapsulates all types of media.
- <figcaption> is used to describe the media in <figure>.
- <video>, <embed>, and <audio> elements are used for media files.
    INTRO TO CSS
-CSS inline styles can be written inside the opening HTML tag using the style attribute.
-Inline styles can be used to style HTML, but it is not the best practice.
-An internal stylesheet is written using the <style> element inside the <head> element of an HTML file.
-Internal stylesheets can be used to style HTML but are also not best practice.
-An external stylesheet separates CSS code from HTML, by using the “.css”.file extension.
-External stylesheets are the best approach when it comes to using HTML and CSS.
-External stylesheets are linked to HTML using the <link> element.
Attributes are added to the element for extra detail or functionality. eg: href, src, class, id
*/
/* 9/10 More CSS - Selectors
-CSS can select HTML elements by type, class, ID, and attribute.
-All elements can be selected using the universal selector.
-An element can have different states using the pseudo-class selector.
-Multiple CSS classes can be applied to one HTML element.
-Classes can be reusable, while IDs can only be used once.
-IDs are more specific than classes, and classes are more specific than type. That means IDs will override any styles from a class, 
  and classes will override any styles from a type selector.
-Multiple selectors can be chained together to select an element. This raises the specificity but can be necessary.
-Nested elements can be selected by separating selectors with a space.
-Multiple unrelated selectors can receive the same styles by separating the selector names with commas.
    VISUAL RULES
-color: this property styles an element’s foreground color
-background-color: this property styles an element’s background color
-font-family: ""; changes the font
-font-weight: ; changes the property added to the font. bold, light
-font-size: 14px; changes the font size 
-text-align: ; changes the alignemnt of the text. right, left, center, justify, etc
-opacity: ; from 0 to 1 changes how visible the element is. 1 = 100% visible.
- !important will override any styling pertaining to the element in question. it should be avoided
  it is very hard to override.
*/
/* 9/12 Colors
when using the HSL styling, first is number is the color, second number is the saturation percentage and the last number is the lightness percentage. 
eg: hsl(225, 100%, 25%)
when using the HSLA styling, the rules are the same but the 4th and new number is from 0 to 1 and dictates opacity of the color.
eg: hsla(325, 50%, 50%, 0.6)
review:
There are four ways to represent color in CSS:
  Named colors—there are more than 140 named colors.
  Hexadecimal or hex colors
    Hexadecimal is a number system with has sixteen digits, 0 to 9 followed by “A” to “F”.
    Hex values always begin with # and specify values of red, blue, and green using hexadecimal numbers such as #23F41A.
    Six-digit hex values with duplicate values for each RGB value can be shorted to three digits.
RGB
  RGB colors use the rgb() syntax with one value for red, one value for blue and one value for green.
  RGB values range from 0 to 255 and look like this: rgb(7, 210, 50).
HSL
  HSL stands for hue (the color itself), saturation (the intensity of the color), and lightness (how light or dark a color is).
  Hue ranges from 0 to 360 and saturation and lightness are both represented as percentages like this: hsl(200, 20%, 50%).
You can add opacity to color in RGB and HSL by adding a fourth value, a, which is represented as a percentage.
    TYPOGRAPHY
-Typography is the art of arranging text on a page.
-Text can appear bold or thin with the font-weight property.
-Text can appear in italics with the font-style property.
-The vertical spacing between lines of text can be modified with the line-height property.
-Serif fonts have extra details on the ends of each letter. Sans-Serif fonts do not.
-Fallback fonts are used when a certain font is not installed on a user’s computer.
-The word-spacing property changes how far apart individual words are.
-The letter-spacing property changes how far apart individual letters are.
-The text-align property changes the horizontal alignment of text.
-Google Fonts provides free fonts that can be used in an HTML file with the <link> tag or the @font-face property at the top of the css file.
-Local fonts can be added to a document with the @font-face property and the path to the font’s source.
*/
/* 9/14 The Box Model
-width and height: The width and height of the content area.
-padding: The amount of space between the content area and the border.
-border: The thickness and style of the border surrounding the content area and padding.
-margin: The amount of space between the border and the outside edge of the element.

Restting default values for the css rules accross different browsers
    * {
      margin: 0;
      padding: 0;
    }
  at the top of the CSS document for the html document in question.

Review of The Box Model
-The box model comprises a set of properties used to create space around and between HTML elements.
-The height and width of a content area can be set in pixels or percentages.
-Borders surround the content area and padding of an element. The color, style, and thickness of a border can be set with CSS properties.
-Padding is the space between the content area and the border. It can be set in pixels or percent.
-Margin is the amount of spacing outside of an element’s border.
-Horizontal margins add, so the total space between the borders of adjacent elements is equal to the sum of the right margin of one element
   and the left margin of the adjacent element.
-Vertical margins collapse, so the space between vertically adjacent elements is equal to the larger margin.
-margin: 0 auto horizontally centers an element inside of its parent content area, if it has a width.
-The overflow property can be set to display, hide, or scroll, and dictates how HTML will render content that overflows its parent’s content area.
-The visibility property can hide or show elements.

Changing the box model
    In the default box model, box dimensions are affected by border thickness and padding.
    The box-sizing property controls the box model used by the browser.
    The default value of the box-sizing property is content-box.
      * {
        box-sizing: border-box
      }
    The value for the new box model is border-box.
    The border-box model is not affected by border thickness or padding.

Flow of HTML
  Position- The position property can take one of five values:
    -static - the default value (it does not need to be specified)
    -relative
    -absolute
    -fixed
    -sticky
*/
/* 9/15 Display and Positioning
Review:
-The position property allows you to specify the position of an element.
-When set to relative, an element’s position is relative to its default position on the page.
-When set to absolute, an element’s position is relative to its closest positioned parent element. It can be pinned to any part of the web page, but 
  the element will still move with the rest of the document when the page is scrolled.
-When set to fixed, an element’s position can be pinned to any part of the web page. The element will remain in view no matter what.
-When set to sticky, an element can stick to a defined offset position when the user scrolls its parent container.
-The z-index of an element specifies how far back or how far forward an element appears on the page when it overlaps other elements.
-The display property allows you to control how an element flows vertically and horizontally in a document.
-inline elements take up as little space as possible, and they cannot have manually adjusted width or height.
-block elements take up the width of their container and can have manually adjusted heights.
-inline-block elements can have set width and height, but they can also appear next to each other and do not take up their entire container width.
-The float property can move elements as far left or as far right as possible on a web page.
-You can clear an element’s left or right side (or both) using the clear property.
*/