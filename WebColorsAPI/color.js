var request = require('request');
var inputColor = process.argv[2];

var url = 'https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json';

request(url, function (error, response, body) {

  var colors = JSON.parse(body);

  		for (var i=0; i>colors.length; i++) {
     		if (inputColor === colors.name[i]) {
     			console.log(colors.rgb.r[i], colors.rgb.g[i], colors.rgb.b[i]);
     		}
     		// else {
     		// 	console.log("color not found");
     		// }
     	}
})