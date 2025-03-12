/*******************************************************/
/// My Game   Far Lands
 ///
/*******************************************************/
/*******************************************************/
// setup()
var gameState = "intro";
var start_image;
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth-4 , windowHeight-4);
	preload();
	
	
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	if(gameState == "intro") {
		background('#0e001b');
		startImage = new Sprite(900, 400, 200, 400, 's');
	    startImage.image = (startText);


	}
	else if(gameState == "play") {
		rectangle1 = new Sprite(400, 400, 200, 400, 'd');
	    rectangle1.color = '#3110a2';

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
function mousePressed() {
}
function clicked() {
	if(start_image.mousePressed) {
		gameState = "play";
	}
}
/*******************************************************/
//  END OF APP
/*******************************************************/