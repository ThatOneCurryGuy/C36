var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

function preload(){
  backgroundImage = loadImage ("assets/background.png")

}

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bgImg = backgroundImage
}


function draw(){
  background(bgImg)
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight)
  
}
