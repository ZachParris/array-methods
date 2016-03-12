var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
	
/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var planetsElement = document.getElementById("planets");
for (var i = 0; i < planets.length; i++) {
	planetsElement.innerHTML+= "<div>" + planets[i] + "<div>"};
// Use the map method to create a new array where the first letter of each planet is capitalized
var planetsCaps = planets.map(function(planets){
	return planets[0].toUpperCase()+planets.substr(1);
})

console.log("planetsCaps", planetsCaps);
// // Use the filter method to create a new array that contains planets with the letter 'e'
var ePlanets = planets.filter(
	function(planet){
		return planet.indexOf("e") > -1
	  });

console.log("ePlanets", ePlanets);
// // Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var bigWords;
for (var i= 0; i < words.length; i++) {
	bigWords+=words[i];
};
 bigWords= words.reduce.(
	function(prev,curr){
		return prev + curr
	}
	);

// var sum = 0;
// for(var = 0; i<numbers.length; i++){
// 	sum+=numbers[i];
// }
// 	var sum = numbers.reduce(
// 		function(prev, curr){
// 			return prev + curr
// 		}
// 		);