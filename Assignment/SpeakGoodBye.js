
var speakWord1 = "Good Bye";

(function (window){
	var byeSpeaker = {};

	byeSpeaker.speak = function(name){
  	console.log(speakWord1 + " " + name);
}
	
window.byeSpeaker = byeSpeaker;

})(window);

