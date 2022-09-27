//Find the area of the room. Length x Width = Area. Round up to the nearest foot.
//Find the area of a single tile in square feet. Add the width of the grout lines. Square feet = area in square inches divided by 144.
//Divide the area of the room by the area of a single tile.
//Add 10% for waste. Consider adding up to 30% for intricate designs and larger tiles.
//Round up.
var lenOfRoom = 50;
var widthOfRoom = 50;
var areaOfRoom = Math.round(lenOfRoom * widthOfRoom);
var boxesNeeded = (areaOfRoom/12) * 1.1;

console.log(boxesNeeded.toFixed(2));