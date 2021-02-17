//It's A Simple Ping Pong Game, Your Goal Is To Get To 50
//Use The Left And Right Arrows To Move
//If You Lose, Click On The Screen To Restart

var started = false;
var score = 0;
var xBall = Math.floor(Math.random() * 300) + 50; //random x coordinate// 
var yBall = 100;
var diameter = 50;
var xBallChange = 7;
var yBallChange = 7;
var firstPaddle;
var secondPaddle;
var paddleWidth = 125;
var paddleHeight = 25;
var audio = new Audio('Sauce It Up.mp3')

function preload() {
  spaceImage = loadImage('BlackJesus.jpg')
}
function setup() {
  createCanvas(windowWidth, windowHeight) //canvas becomes size of the whole window//
}

function draw() {
  audio.play()
  audio.loop = true
  background(spaceImage)
  xBall += xBallChange;
  yBall += yBallChange;
//makes the ball bounce all over the screen
  if (xBall < diameter/2 || xBall > windowWidth + 0.5*diameter) {
  xBallChange *= -1;
} 
if (yBall < diameter/2 || yBall > windowHeight - diameter){
  yBallChange *= -1;
} // makes the collision between the ball and the paddle
if ((xBall > firstPaddle &&
  xBall < firstPaddle + paddleWidth) && (yBall + (diameter/2) >= secondPaddle)) {
  //xBallChange *= -1; 
  yBallChange *= -1;
  score++
}

if(yBall > secondPaddle) {
  noLoop()
  fill('red')
  textSize(40)
  text('You Lose, Click To Try Again',50,200)
} else if (score == 50) {
  noLoop()
  fill('red')
  textSize(40)
  text('You Win',50,200)
}
  fill('#00FF00')
  noStroke()
  ellipse(xBall, yBall, diameter, diameter)

  if (!started) {
  firstPaddle = windowWidth / 2;
  secondPaddle = windowHeight - 100;
  started = true;
} //starting of the game
fill('blue');
noStroke();
rect(firstPaddle, secondPaddle, paddleWidth, paddleHeight);

fill('red');
textSize(24);
text("Score: " + score, 10, 25);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    firstPaddle -= 70;
  } else if (keyCode === RIGHT_ARROW) {
    firstPaddle += 70;
  }  
}

function mousePressed() {
  document.location.reload()
}