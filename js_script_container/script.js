/*******************************************************/
// My Game   Far Lands
// Written by William Kan
// Date: who knows its been too long help
/*******************************************************/
/*******************************************************/
// setup()





/*******************************************************/
//var container
/*******************************************************/
var gameState = "intro";
var startImage;
var startText;
var clickedCounter = 0;
var asteroidSpawingLocationY = 0;
var borderSpawned = false;
var spaceshipSpawned = false;
var asteroidSpawningChance = 0;
var coinSpawningChance = 0;
/*******************************************************/
//const container
/*******************************************************/
const asteroidSpawningChanceParameter = 4
const asteroidSpeed = -10;
const asteroidGoesStraight = 0;
const clickedCounterIncrease = 0.5;
const coinSpawningChanceParameter = 4

/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth-4 , windowHeight-4);
	asteroidGroup = new Group();
	coinGroup = new Group();
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
			startImage.remove();
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
		spaceshipMovement();

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
			asteroidMovement();
		}
		asteroidDeleteParameter();
		spaceshipCrashes();
		spawnCoin();
		
		
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
// Speed of the asteroid
function asteroidMovement() {
	asteroid.vel.y = asteroidGoesStraight;
	asteroid.vel.x = asteroidSpeed;
}
/*****************************************************/
// spawnCoin()
// Called by the draw loop
// Spawns the coins
// Input: N/A
// Returns: N/A
// chatgpt used to find the error
/*****************************************************/

function spawnCoin() {
	coinSpawningChance = random(1,100);
	coinSpawingLocationY = random(1,windowHeight);
	if(coinSpawningChanceParameter>coinSpawningChance) {
		coin = new Sprite(windowWidth+20, coinSpawingLocationY, 20, 'k' )
		coinGroup.add(coin);
		coinMovement();
	}
	
}
/*****************************************************/
// coinMovement()
// Called by the spawnCoin()
// sets the speed for the coins
// Input: N/A
// Returns: N/A
/*****************************************************/
function coinMovement() {
	coin.vel.x = -10;
}




/**************************************************** *
*******************************************************/
//  END OF APP
/*******************************************************
 * *****************************************************/