# Unit 2 Assessment Study Guide - JavaScript Fundamentals
## Short Responses 

1. **The function declaration comes _after_ the variable declaration in the code below. Why does it still work?**
```javascript
let greeting = "Hello"!

function sayItLoud() {
  console.log(`${greeting}!!!`)
}

sayItLoud();
```

This still works because function declaration are hoisted. This means that when the program reads the code function declaration are read first, and then procceed to read the rest of the code in a contorl flow manner. 

2. **Okay... so why does the code below throw an error?**
```javascript
sayItLoud();

function sayItLoud() {
  console.log(`${greeting}!!!}`)
}

let greeting = "Hello"
```

This does work but is giving you an error becuase the when the function was invoked it is tasked to log the variable `greeting`. But becuase `greeting` was not initalied before the function was called is runing into control flow issues. 

3. **Mmhmmm... so what about this😰. What does the following code log? Why?**
```javascript
sayItLoud();
function sayItLoud() {
  console.log(`${greeting}!!!`)
}
var greeting = "Hello"
```

This will log `Hello`. This is becuase hoisitng appies to two things. Hoisting apply to variables declared with `var` and function declaration. When the code ran it recogonises that the function `sayItLoud()` was initalied, after that it recognies that a the variable `greeting` also exsist. After hoisting the code ran and had the variable `greeting` stored  in memory and accessed it when the function `sayItLoud()` printed `greeting`. 

4. **Why does the following block of code throw an error? Fix this without changing the variable declaration keyword.**
```javascript
const isMaya🧘🏽‍♀️ = true;
if (isMaya🧘🏽‍♀️) {
  let status = 'Everything is just fine';
  console.log(status);
} else {
  let status = 'Time to panic.'
  console.log(status);
}

// console.log(status);
```
This code throws an error becuase when the code is trying to log `status` is cant becuase status is block scoped. If we wanted to log the result we would place the log inside of the block.    


5. **Why does the following block of code NOT throw an error?**
```javascript
const isLaishaOnTime = true;

if (isLaishaOnTime) {
  var status = 'Everything is just fine';
} else {
  var status = 'Time to panic.'
}

console.log(status);
```

This dosnt throw and error because the variable `status` was declared with the keyword var. Var even in a block becomes hoisted and "declared in the gloabale scope". 

6. **In JavaScript, we can declare variables with `var`, `let`, and `const`. What are the differences between each? Be sure to comment on how each declaration impacts the _scope_, _reassignment_, and _hoisting_ of variables.**

Varibales declared with the key word `var` are able to be reassigned and are the only key word that is hoisted. `Let` is able to be reassigned but can only live inside of its block. `Const` can only live inside of its block but can not be reassigned to a new value.  

7. **Where does the following code throw an error? What type of error? Why?**
```javascript
let a = b;

console.log(a);
```

This throws an error because you are trying to log a variable that points to a variable, but that variable has not been initalized. So you will get a variable that has not been declared yet.  


8. **What is the value of `b` after this code runs? Explain why this is the case.**
```javascript
let a = 1;
let b = a;
a += 1;

console.log(a);
console.log(b);
```
The first console.log will log `2` because a += 1 is updating the variable. The second console.log will log `1` because variable `b` is gaining it value from a. 



9. **What does the following code log? Explain why?**
```javascript
let a = {goals: "Enmanuel"};
let b = a;
a.goals = "Cielo";
console.log(b.goals);
```
This will log `Cielo` because we initalied variable `b` with the value of `a`. Since variable `a` is an object when we are assign it to `b` we are using by-pass-reference. So when we reassign the value of `a` we also inpact the value of `b`. 


10. **Where does the following code throw an error? What type of error? Why?**
```javascript
const bffs = 'Enmanuel Laisha';
bffs = 'Enmanuel Laisha Cielo';

console.log(bffs);
```

This will give you a "cannot reassign a `const` variable." This is because const can not be reassigned in value.  


11. **Wait, why doesn't the code below throw an error?! 🧐 What does this demonstrate?**
```javascript
const bffs = ['Enmanuel', 'Laisha'];
bffs.push('Cielo');

console.log(bffs);
```
Arrays can be considered objects. Object can be reassigned values even when they are declared with const. 



12. **What does the following code log? Why?**
```javascript
let greeting = "What's up?";

function say() {
 return `${greeting}! 🤟🏿`
}

console.log(say);
```
This will log the `function:say`. This is because we are not invoking the function but only calling on the function name. If we wanted to invoke the function we would have placed `say()` inside of the console.log. 



13. **What does the following code log? What does this say about JavaScript function arguments?**
```javascript
function shoutOut() {
  console.log(`The flyest person in the room is Carmen!`);
}

shoutOut('Devonte');
```
"



14. **What happens if a function is invoked with fewer arguments than there are parameters? Include a code snippet to illustrate.**




15. **What about extra parameters? How can we access them and use them to our advantage? Illustrate by writing a function that takes any number of integers as arguments and returns their sum.**

Example:
```javascript
sum(1, 2, 10); // 13
sum(5); // 5
sum(100, 200, 800, 1, 1, 1); // 1103;
```




16. **What does the following code log? Why?**
```javascript
let theCreator = 'Devonte';

function shoutOut() {
  theCreator = 'Peter';
}

shoutOut();
console.log(`The best designer in the room is ${theCreator}`.);
```




17. **What does the following code log? Why?**
```javascript
let theHustler = 'Laisha';

function shoutOut() {
  let theHustler = `Paul`;
  console.log(`${theHustler} is the hardest working person in the room.`);
}

shoutOut();
console.log(`${theHustler} is also the hardest working person in the room.`);
```




18. **What does the following code log? Why?**
```javascript
let theCEO;

function hire(theCEO) {
  theCEO = 'Mark';
}

hire(theCEO);
console.log(`I have no doubt that ${theCEO} will be running a company of his own very soon. I just hope that he will hire me when I need a job.`);
```



19. **What does it mean to _pass by value_? For what data types does JavaScript _pass by value_? Use a code snippet to illustrate.**





20. **What does it mean to _pass by reference_? For what data types does JavaScript  appear to _pass by reference_? Use a code snippet to illustrate.**





21. **Explain why the first code snippet below throws an error, but the second does not.**

```javascript
10 + a;        // ReferenceError: a is not defined
```

```javascript
let a = {};
10 + a.x;      // Evaluates to NaN
```




22. **What is the relationship between JavaScript Objects and JavaScript Arrays? We say a JavaScript Object is _empty_ if it has no properties of its own. We say that a JavaScript Array is _empty_ if it has no _elements_. How do we check for emptiness of JavaScript Objects? How do we check for emptiness of JavaScript Arrays. Use code snippets to illustrate your answer.**





## Problem Set
1. Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels (``'a'``,``'e'``,``'i'``,``'o'``,``'u'``), digits, punctuation, or whitespace.

Examples:
```javascript
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
```



2. Write a function that takes a string and returns the string reversed.

Examples:
```javascript
reverse('Test'); // "tseT"
reverse('anotherTest'); // "tseTrehtona"
reverse('factor In spaces'); // "secaps nI rotcaf"
reverse(''); // ""
```



3. Write a function takes an integer `year` as an argument and returns a boolean based on whether the year is a leap year. Note: Every year that is evenly divisible by 4 is a leap year, except every year that is evenly divisible by 100, unless the year is also evenly divisible by 400.

Examples:
```javascript
isLeapYear(1997); // false
isLeapYear(1996); // true
isLeapYear(1900); // false
isLeapYear(2000); // true
```



4. Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — `'zero'`, `'one'`, `'two'`, `'three'`, `'four'`, `'five'`, `'six'`, `'seven'`, `'eight'`, `'nine'` — converted to its corresponding digit character.

Example:
```javascript
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
```



5. For a game of Dungeons & Dragons, each player starts by generating a character they can play with. This character has, among other things, six abilities; strength, dexterity, constitution, intelligence, wisdom and charisma. These six abilities have scores that are determined randomly. You do this by rolling four 6-sided dice and record the sum of the largest three dice. You do this six times, once for each ability.

Your character's initial hitpoints are 10 + your character's constitution modifier. You find your character's constitution modifier by subtracting 10 from your character's constitution, divide by 2 and round down.

Write a random character generator function that follows the rules above.

For example, the six throws of four dice may look like:
  * 5, 3, 1, 6: You discard the 1 and sum 5 + 3 + 6 = 14, which you assign to strength.
  * 3, 2, 5, 3: You discard the 2 and sum 3 + 5 + 3 = 11, which you assign to dexterity.
  * 1, 1, 1, 1: You discard the 1 and sum 1 + 1 + 1 = 3, which you assign to constitution.
  * 2, 1, 6, 6: You discard the 1 and sum 2 + 6 + 6 = 14, which you assign to intelligence.
  * 3, 5, 3, 4: You discard the 3 and sum 5 + 3 + 4 = 12, which you assign to wisdom.
  * 6, 6, 6, 6: You discard the 6 and sum 6 + 6 + 6 = 18, which you assign to charisma.
Because constitution is 3, the constitution modifier is -4 and the hitpoints are 6.

Your function should take one argument, a `name`. It should generate random attribute values using `Math.rand()`. The function should return a JavaScript Object that contains all of the above attributes.

Example:
```javascript
characterGenerator("Elminster");

/*
{
  name: "Elminster"
  strength: 10,
  dexterity: 8,
  constitution: 12,
  intelligence: 14,
  wisdom: 12,
  charisma: 18,
  hitpoints: 11
}

*/
```
