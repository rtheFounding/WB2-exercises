var incomeTax = 75000;
var percentageTaken = 0.23;

var monthlyAmount = incomeTax / 12;
var taxesWithhled = monthlyAmount * percentageTaken;

console.log(taxesWithhled.toFixed(2));
