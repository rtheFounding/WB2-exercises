// Exercise 1 section 2-11
var foodCost = 79.25;
var tax = 6.54;
var tip = 12.00;

// calculation
var totalDue = foodCost + tax + tip;

// output

console.log("The total due is " + totalDue);
console.log("Food cost is " + foodCost + " and tax is " + tax);
console.log("Tip is " + tip.toFixed(2)); // the toFixed() method converts a number to a string. The toFixed() method rounds the string to a specified number of decimals.
console.log("Total Due is " + totalDue);