/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
var l1 = 12;
var l2 = 10;
function area(l1, l2) {
  return l1 * l2;
}
console.log("Exercise 1: The area of your rectangle is " + area(l1, l2) + "cm");
/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
crazySum(1, 2, 5);
/*required numbers*/
function crazySum() {
  /*declaring a function*/
  var crazySum = 0;
  /*starting point*/
  for (var i = 0; i < arguments.length; i++) {
    /*arguments = numbers in crazySum*/
    /*from 0 until it reaches arguments length*/
    crazySum += arguments[i];
  }
  console.log("Exercise 2: The sum of these numbers is: " + crazySum);
}
/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
function crazyDiff(a, b) {
  return Math.abs(a - b);
}
console.log("Exercise 3: " + crazyDiff(95, 15)); // Which is 80 ;)
/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
boundary(300);
function boundary(boundary) {
  if ((boundary >= 20 && boundary <= 100) || boundary == 400) {
    console.log("Exercise 4: True ");
  } else {
    console.log("Exercise 4: False ");
  }
}

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
strivify(" nolan!");
function strivify(strivify) {
  if (strivify.startsWith("Strive")) {
    return strivify;
  } else {
    let withoutstrive = "Exercise 5: " + "Strive" + strivify;
    console.log(withoutstrive);
  }
}
/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
function check3an7d(numberdiv) {
  if (numberdiv % 3 == 0 || numberdiv % 7 == 0) {
    return "Exercise 6: " + numberdiv + " is a multiple of 3 or 7";
  } else {
    return "Exercise 6: Not a multiple of 3 or 7";
  }
}
console.log(check3an7d(15));
/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Exercise 7: " + reverseString("hello"));
/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalizeFirstLetter("Exercise 8: how the f jake got there?!")); //usable only for 1 word - searching for other solutions
/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
