var track;
var runner;
var leftInvis;
var rightInvis;

function preload(){
  //pre-load images
  roadImg = loadImage("path.png");
  guyImg1 = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200, 200, 50, 200);
  track.addImage(roadImg);

  runner = createSprite(200, 320, 25, 25);
  runner.addAnimation("running", guyImg1)
  runner.scale = 0.075

  leftInvis = createSprite(70, 200, 10, 400);
  leftInvis.visible = false;
  rightInvis = createSprite(330, 200, 10, 400);
  rightInvis.visible = false;

}

function draw() {
  background("blue");

  track.velocityY = -3;

  runner.x = World.mouseX;

  if (track.y<400) {
    track.y = track.height/2;
  }

  runner.collide(leftInvis);
  runner.collide(rightInvis);

  if (runner.x<80||runner.x>320){
    if (runner.x<80){
      runner.x = 80;
    }
    if (runner.x>320){
      runner.x = 320;
    }
  }
  drawSprites();
}
