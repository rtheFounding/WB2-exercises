// Description: This script tests various numeric
// conversion techniques
// Author: Randy Rivera

var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";

//parseInt
console.log(parseInt(a)); // 101
console.log(parseInt(b)); // 55
console.log(parseInt(c)); // 402
console.log(parseInt(d)); // NaN

//parseFloat
console.log(parseFloat(a)); // 101.1
console.log(parseFloat(b)); // 55
console.log(parseFloat(c)); // 402
console.log(parseFloat(d)); // NaN

//Number
console.log(Number(a)); // 101.1
console.log(Number(b)); // 55
console.log(Number(c)); // NaN
console.log(Number(d)); // NaN

//unary + operator
console.log(a = +a); // 101.1
console.log(b = +b); // 55
console.log(c = +c); // NaN
console.log(d = +d); // NaN