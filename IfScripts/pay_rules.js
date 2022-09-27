var payRate = 17.30;
var hoursWorked = 45;
var overtimeHours = 5;

if (hoursWorked > 40) {
    regularPay = payRate * 40;
    overtimePay = payRate * 1.5;
    console.log(overtimePay * overtimeHours + regularPay);
} else {
console.log(payRate * hoursWorked);
}