

//.......node exercise #1..........//

// var r = process.argv[2];
// var g = process.argv[3];
// var b = process.argv[4];
// var luminosity = function(r,g,b) {
// 	return ((0.2126 * r) + (0.7152 * g) + (0.0722 * b));
// }
// console.log(luminosity(r,g,b));

var luminosity = function() {
	return ((0.2126 * process.argv[2]) + (0.7152 * process.argv[3]) + (0.0722 * process.argv[4]));
};
console.log(luminosity());//more efficient

