/*******************************************************/
/// My Game   Far Lands
 ///
/*******************************************************/
/*******************************************************/
// setup()
var gameState = "intro";
var startImage;
var startText;
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
		startImage.image = startText; 

		




	}
	else if(gameState == "play") {
		startImage.remove();
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
		gameState = "play";
		console.log("mouse CLICKE!!");
	}
}
/*******************************************************/
//  END OF APP
/*******************************************************/