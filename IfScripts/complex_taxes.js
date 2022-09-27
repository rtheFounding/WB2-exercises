// weekly 475 dollars 
// tax withhold this period is 47.50 because 475.00 *  10 % or 0.1 (in this instance looking at tax table)

//var filingStatus = "Single";
//var annualIncome = 24700;
//var hoursWorked = ;



//if (filingStatus == "Single") {
//    annualIncome * 
//} else if (filingStatus == "Joint") {

//}

//console.log("You worked " + + " hours this period")   

// weekly


var payRate = 17.30;
var hoursWorked = 45;
var overtimeHours = 5;

if (hoursWorked > 40) {
    hoursWorkedThisYear = hoursWorked * 52;
    regularPay = payRate * 40;
    overtimePay = payRate * 1.5;
    weeklyPayWithOverTime = overtimePay * overtimeHours + regularPay;
    //console.log(weeklyPayWithOverTime);
} else {
console.log(payRate * hoursWorked);
}


// Calculate Annually
// In this particular 
annualIncome = weeklyPayWithOverTime * 52;

var filingStatus = "Single";
if (filingStatus == "Single") {
    singleTaxWithheld = annualIncome * 0.15
} else {
    jointTaxWithheld = annualIncome * 0.11;
}

var netPay = annualIncome - singleTaxWithheld;

console.log("You worked " + hoursWorkedThisYear + " hours this year.")
console.log("Because you earn " + payRate.toFixed(2) + " per hour, your annual gross pay is " + annualIncome + "")
console.log("Your filing status is " + filingStatus + "")
console.log("Your tax withholdings this year is $" + singleTaxWithheld + "")
console.log("Your net pay is $" + netPay + "");
