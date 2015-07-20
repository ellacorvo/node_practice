

//.......node exercise #2..........//

var isLight = function() {
	var lightness =  ((0.2126 * process.argv[2]) + (0.7152 * process.argv[3]) + (0.0722 * process.argv[4]));
	if (lightness >= 155) {
		return "light";
	}
	else {
		return "dark";
	}
}
console.log(isLight());