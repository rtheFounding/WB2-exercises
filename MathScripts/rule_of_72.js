// Looking up the rule of 72 defintely helped set this up instead of guessing.

var interestRateNum = 4;

var numOfYears = 72/interestRateNum;

var savingsInAccount = 1000 * 2;

console.log("At a " + interestRateNum + "% interest rate, your savings account will be worth " + savingsInAccount.toFixed(2) + " in " + numOfYears.toFixed(1) + " years.")