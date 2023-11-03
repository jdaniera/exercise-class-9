/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * initialise a variable called set H to the values of Nathan, Holden, Nea, Jackson
 * then, initialise a vairable called set X to the values of Bob, Ann, Jessica and John
 * concatenate the two arrays using .concat to the variable d3 program
 * console log out d3 program
 */

var setH = ["Nathan", "Holden", "Nea", "Jackson"];
var setX = ["Bob", "Ann", "Jessica", "John"];

var d3Program = setH.concat(setX);
console.log(d3Program);



/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * initialise a variable called origin containing two different arrays
 * the first array will contain the values of Kelly, Peter, Jimmy and Winnie
 * the second array will contain the values of Canada, Mexico, USA and Spain 
 * console log out origin to say the sentence of "Jimmy is from Mexico"
 */

var origin = [
    ["Kelly", "Peter", "Jimmy", "Winnie"],
    ["Canada", "Mexico", "USA", "Spain"]
]

console.log(origin[0][2] + " is from " + origin[1][1] + ".");  

