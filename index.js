//random animal generator

function generate(adjective) {
	
	var responses = [
		adjective + " monkey",
		adjective + " sloth",
		adjective + " horse",
		adjective + " panda",
		adjective + " koala",
		adjective + " cat",
		adjective + " dog",
		adjective + " eagle",
		adjective + " owl",
		adjective + " elephant",
		adjective + " lion",
		adjective + " zebra",
		adjective + " pigeon",
		adjective + " worm",
		adjective + " penguin",
		adjective + " bunny",
		adjective + " chicken",
		adjective + " tiger",
		adjective + " donkey",
		adjective + " lemur",
		adjective + " squirrel",
		adjective + " mouse",
		adjective + " roach",
		adjective + " spider",
		adjective + " bee",
		adjective + " cow",
		adjective + " sheep",
		adjective + " pig",
		adjective + " gecko",
		adjective + " snake",
		adjective + " goat",
		adjective + " parrot",
		adjective + " frog",
		adjective + " pelican",
		adjective + " fish",
		adjective + " octopus"
		];

var randomIndex = Math.floor(Math.random() * responses.length);

var randomResponse = responses[randomIndex];

document.getElementById("response").textContent = randomResponse;
	
	return(adjective);
	
}

//restyle element

function restyle() {
	var response = document.getElementById("response");
	var styles = [
		{ property: "font-size", value: getRandomNumber(24, 48) + "px" },
		{ property: "color", value: getRandomColor () },
		{ property: "background", value: getRandomColor() }
	];
	
	styles.forEach(function(style) {
        response.style[style.property] = style.value;
    });
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//button

function generateOrRestyle(adjective) {
	console.log("meow")
	var button = document.getElementById("buttonette");
	if (button.dataset.action == "generate") {
		console.log("woof")
		generate(adjective);
		restyle();
		button.textContent = "restyle output";
		button.dataset.action = "restyle"; }
	else {
		button.textContent = "generate output";
		button.dataset.action = "generate";
	}
}

