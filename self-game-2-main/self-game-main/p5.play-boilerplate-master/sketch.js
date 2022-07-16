var space, EnType1, EnType2, EnType3, EnCaptain, En1, En2, En3, EnCap, playerImage, PlayerShip, background1, bgimage;
var distance=180;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background1=createSprite(windowWidth/2,windowHeight/2);
  background1.addImage(bgimage);
  background1.velocityX=-3;
  EnCap = new Ship("EnCaptain", 500, 300);
  En1 = new Ship("En1", 300,200);
  En2 = new Ship("En2", 300,300);
  En3 = new Ship("En3", 300,400);
  PlayerShip = new Player(925, 300)
  edges=createEdgeSprites();
}
function preload(){
  space = loadImage("sprite_0 5.png");
  EnType1 = loadImage("sprite_0.png");
  EnType2 = loadImage("sprite_0 4.png");
  EnType3 = loadImage("sprite_0 3.png");
  EnCaptain = loadImage("sprite_0 2.png");
  playerImage = loadImage("PlayerShip.gif")
  bgimage = loadImage('long bg.png');
}

function draw() {
  background(space);
  PlayerShip.control()
  if(background1.x<0){
    background1.x=windowWidth/2
  } 
  EnCap.movement('EnCaptain')
  En2.movement('En2')
  En1.movement('En1')
  En3.movement('En3')
  removeElements();
  var scoreelement=createElement('h2','distance left');
  scoreelement.style('color', '#00a1d3');
  scoreelement.position(30,30);
  var scoreelement2=createElement('h2',distance );
  scoreelement2.style('color', '#00a1d3');
  scoreelement2.position(155,30);
  console.log(frameCount)
  if(frameCount%50==0){
    distance--;
  }
  drawSprites();
}