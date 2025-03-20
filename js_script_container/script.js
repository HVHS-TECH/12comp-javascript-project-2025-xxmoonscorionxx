/*******************************************************/
// My Game   Far Lands
// Written by William Kan
// Date: who knows its been too long help
/*******************************************************/
/*******************************************************/
// setup()
var gameState = "intro";
var startImage;
var startText;
var clickedCounter = 0;
const clickedCounterIncrease = 0.5;
var spaceshipSpawned = false;
var asteroidSpawningChance = 0;
const asteroidSpawningChanceParameter = 4
var asteroidSpawingLocationY = 0;
var borderSpawned = false
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth-4 , windowHeight-4);
	preload();	
	asteroidGroup = new Group();
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
	playState();
}
/*******************************************************/
// functions()
/*******************************************************/
function playState() {
	if(gameState == "intro") {
		background('#0e001b');
		if(clickedCounter == 1) {
			startImage.remove()
			gameState = "play"
		}
	}
	else if(gameState == "play") {
		background('#0e001b');
		//* Coding for the spaceship*//
		if(spaceshipSpawned == false) {
			spaceship  = new Sprite(200, 400, 100, 40, 'd');
			spaceshipSpawned = true;
			console.log("ITS HAPPENING")
		}
		spaceship.rotationSpeed = 0;
		spaceship.rotation = 0;
		spaceshipMovement()	

		//** Coding for Borders **/
		if(borderSpawned == false) {
			borders();
			borderSpawned = true
		}

		//* Coding for Asteroid*//
		asteroidSpawningChance = random(1,100);
		asteroidSpawingLocationY = random(1,windowHeight);
		if(asteroidSpawningChanceParameter>asteroidSpawningChance) {
			asteroid = new Sprite(windowWidth+20,asteroidSpawingLocationY, 200, 'd')
			asteroidGroup.add(asteroid)
			asteroid.vel.x = -10;
		}
		asteroidDeleteParameter();
		spaceshipCrashes();
		
		
	}
	else if(gameState == "lose") {
	}
}
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
 // MOVEMENT OF THE spaceship
*******************************************************/
//** 
function spaceshipMovement() {
if (kb.pressing('left')) {
	spaceship.vel.x = -7;

}

else if (kb.pressing ('right')) {
	spaceship.vel.x = 7;  

}

if (kb.released('left')) {
	spaceship.vel.x = 0;

}

else if (kb.released('right')) {
	spaceship.vel.x = 0;
}
if (kb.pressing('up')) {
	spaceship.vel.y = -7;

}
else if(kb.pressing('down')) {
	spaceship.vel.y = 7;
}
if (kb.released('up')) {

	spaceship.vel.y = 0;

}

else if (kb.released('down')) {
	spaceship.vel.y = 0;
}
}
function asteroidMovement() {
	asteroid.vel.x = -10;
	asteroid.vel.y = 0
}

/**SpawnBorders**/
/**MUST REMEMBER TO CHANGE BACK TO NORMAL**/
function borders() {
	// north wall 
	north = new Sprite(windowWidth/2, 0, windowWidth, 3, 's' )
	north.color = 'red'

	// south wall
	south = new Sprite(windowWidth/2, windowHeight, windowWidth, 3, 's' )
	south.color = 'red'
	
	// west wall
	west = new Sprite(-400, windowHeight/2, 3, windowHeight, 's' )
	west.color = 'red'

	



}


// Checking if the asteroid has collided with the west wall
function asteroidDeleteParameter() {
	asteroidGroup.collides(west,asteroidDelete);
}
//
function asteroidDelete(_west,_asteroid) {
	_asteroid.remove();
	console.log("contact made")
}

// Checking if the spaceship has crashed into the asteroid
function spaceshipCrashes() {
	asteroidGroup.collides(spaceship,spaceshipHit);
}
// spaceship has crashed into an asteroid and the asteroid gets removed
function spaceshipHit(_asteroid,_spaceship) {
	_asteroid.remove();
	console.log("contact made")
}








/**************************************************** *
*******************************************************/
//  END OF APP
/*******************************************************
 * *****************************************************/