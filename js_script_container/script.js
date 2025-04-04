/*******************************************************/
// My Game   Far Lands
// Written by William Kan
// Date: who knows its been too long help
/*******************************************************/
/*******************************************************/


/*******************************************************/
//var container
/*******************************************************/
let gameState = "intro";
let startImage;
let startText;
let asteroidModel;
let clickedCounter = 0;
let asteroidSpawingLocationY = 0;
let borderSpawned = false;
let spaceshipSpawned = false;
let asteroidSpawningChance = 0;
let coinSpawningChance = 0;
let asteroidSpawned = false;
let score = 0;
let lives = 5
let checkLives = true
let coinSpawingLocationY;
let gameStateChanged = 0;
let particleMovementX;
let particleMovementY;
/*******************************************************/
//const container
/*******************************************************/
const ASTEROIDSPAWNINGCHANCEPARAMETER = 4;
const ASTEROIDSPEED = -10;
const ASTEROIDGOESSTRAIGHT = 0;
const CLICKCOUNTERINCREASE = 0.5;
const COINSPAWNINGCHANCEPARAMETER = 2;

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
		info();
		if(spaceshipSpawned == false) {
			spaceship  = new Sprite(200, 400, 100, 40, 'd');
			spaceshipSpawned = true;
			console.log("ITS HAPPENING")
		}
		spaceship.rotationSpeed = 0;
		spaceship.rotation = 0;
		asteroidGroup.rotationSpeed = 0;
		asteroidGroup.rotation = 0;
		spaceshipMovement();

		//** Coding for Bodrers **/
		if(borderSpawned == false) {
			borders();
			borderSpawned = true
		}

		//* Coding for Asteroid*//
		asteroidSpawningChance = random(1,100);
		asteroidSpawingLocationY = random(1,windowHeight);
		if(asteroidSpawned == true) {
			asteroidMovement();
		}
		if(ASTEROIDSPAWNINGCHANCEPARAMETER>asteroidSpawningChance) {
			asteroid = new Sprite(windowWidth+50,asteroidSpawingLocationY, 200, 'd')
			asteroidGroup.add(asteroid)
			asteroidSpawned = true;
			asteroid.image = asteroidModel;
		}
		
		asteroidDeleteParameter();
		spaceshipCrashesAsteroid();
		spawnCoin();
		spaceshipTouchesCoin();
		gameStateChanger();
		

		

		
		
	}
	else if(gameState == "lose") {
		background('#0e001b');

		
	}
}
function preload() {
	startText = loadImage('assets/start_image.png');
	asteroidModel = loadImage('assets/AsteroidSkin.png');

}

//**  This website helped https://processing.org/reference/mousePressed_.html**//
function mousePressed() {
	if(mousePressed) {
		clickedCounter = clickedCounter+CLICKCOUNTERINCREASE;
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
	asteroidGroup.vel.x = ASTEROIDSPEED;
	asteroidGroup.vel.y = ASTEROIDGOESSTRAIGHT;
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
function spaceshipCrashesAsteroid() {
	asteroidGroup.collides(spaceship,spaceshipHit);
}
// spaceship has crashed into an asteroid and the asteroid gets removed
function spaceshipHit(_asteroid,_spaceship) {
	_asteroid.remove();
	console.log("contact made");
	lives--
	crashParticles();
}
function spaceshipTouchesCoin() {
	coinGroup.collides(spaceship,spaceshipCollectCoin);
}
// spaceship has crashed into an asteroid and the asteroid gets removed
function spaceshipCollectCoin(_coin,_spaceship) {
	_coin.remove();
	console.log("coin collected");
	score++
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
	if(COINSPAWNINGCHANCEPARAMETER>coinSpawningChance) {
		coin = new Sprite(windowWidth+20, coinSpawingLocationY, 20, 'k' )
		console.log("coin spawned");
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
	coinGroup.vel.x = -10;
}

/*****************************************************/
// collisions();
// Called by the draw loop
// Detects when sprites collide and executes code to delete
// the sprite and change another variable
// Input: N/A
// Returns: N/A
/*****************************************************/
function info() {
	fill("#cbc83c");
	text("Lives " + lives, 50, 50);
	text("Score " + score, 50, 100);
}


/*****************************************************/
// collisions();
// Called by the draw loop
// Detects when sprites collide and executes code to delete
// the sprite and change another variable
// code for the for loop itself taken from https://flexiple.com/javascript/infinite-loops-javascript
// Input: N/A
// Returns: N/A
/*****************************************************/

function gameStateChanger() {
	if(gameStateChanged<1) {
		console.log("u check");
		if(lives <= 0) {
			gameState = "lose";
			console.log("u lost");
			gameStateChanged =1;
			sprite.remove();
			}
	}
}

function crashParticles() {
	for(i=0; i<5; i++) {
		particlesGroup = new Group();
		particles = new Sprite(spaceship.x, spaceship.y, 10, 10, 'n');
		particles.color = "red";
		particleMovementX = random(-5,5);
		particleMovementY = random(-5,5);
		particles.vel.x = particleMovementX;
		particles.vel.y = particleMovementY;
		particles.life = 30;
		particlesGroup.add(particles);
	}
}
/**************************************************** *
*******************************************************/
//  END OF APP
/*******************************************************
 * *****************************************************/