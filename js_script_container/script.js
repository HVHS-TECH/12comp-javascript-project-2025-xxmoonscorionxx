/*******************************************************/
/// My Game   Far Lands
 ///
/*******************************************************/
/*******************************************************/
// setup()
var gameState = "intro";
var startImage;
var startText;
var clickedCounter = 0;
const clickedCounterIncrease = 0.5;
var spaceShipSpawned = false;
var astroidSpawningChance = 0;
var astroidSpawingLocationY = 0;
world.gravity = 0
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth-4 , windowHeight-4);
	preload();	
	astroidGroup = new Group();
		if(gameState == "intro") {
			background('#0e001b');
			startImage = new Sprite(900, 400, 200, 400, 's');
			startImage.image = startText; 
		}
		else if(gameState == "play") {
			startImage = null;
		}
	else if(gameState == "lose") {	
 }
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	if(gameState == "intro") {
		background('#0e001b');
		if(clickedCounter == 1) {
			startImage.remove()
			gameState = "play"
		}
	}
	else if(gameState == "play") {
		background('#0e001b');
		//* Coding for the Spaceship*//
		if(spaceShipSpawned == false) {
			Spaceship  = new Sprite(200, 400, 100, 40, 'd');
			spaceShipSpawned = true;
			console.log("ITS HAPPENING")
		}
		Spaceship.rotationSpeed = 0;
		Spaceship.rotatiom = 0;
		spaceshipMovement()	

		//* Coding for Astroids*//
		astroidSpawningChance = random(1,100);
		astroidSpawingLocationY = random(1,windowHeight);
		if(2>astroidSpawningChance) {
			astroid = new Sprite(windowWidth+20,astroidSpawingLocationY, 200, 'k')
			astroid.vel.x = -10;
			
		}
		
		
	}
	else if(gameState == "lose") {
	}
}
/*******************************************************/
// functions()
/*******************************************************/
function preload() {
	startText = loadImage('assets/start_image.png');
}

//**  This website helped https://processing.org/reference/mousePressed_.html**//
function mousePressed() {
	if(mousePressed) {
		clickedCounter = clickedCounter+clickedCounterIncrease;
		console.log("MOUSE WAS CLICKED!!");
	}
}

/**************************************************** *
 // MOVEMENT OF THE SPACESHIP
*******************************************************/
//** 
function spaceshipMovement() {
if (kb.pressing('left')) {
	Spaceship.vel.x = -7;

}

else if (kb.pressing ('right')) {
	Spaceship.vel.x = 7;  

}

if (kb.released('left')) {
	Spaceship.vel.x = 0;

}

else if (kb.released('right')) {
	Spaceship.vel.x = 0;
}
if (kb.pressing('up')) {
	Spaceship.vel.y = -7;

}
else if(kb.pressing('down')) {
	Spaceship.vel.y = 7;
}
if (kb.released('up')) {

	Spaceship.vel.y = 0;

}

else if (kb.released('down')) {
	Spaceship.vel.y = 0;
}
}




/**************************************************** *
*******************************************************/
//  END OF APP
/*******************************************************
 * *****************************************************/