var fixedRect, movingRect;
var gobj1, gobj2, gobj3, gobj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor="green";
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor  = "green";
  fixedRect.debug = true;
  movingRect.debug = true;

  gobj1 = createSprite(100,100,50,50);
  gobj1.shapeColor = "green";
  gobj2 = createSprite(200,100,50,50);
  gobj2.shapeColor = "green";
  gobj3 = createSprite(300,100,50,50);
  gobj3.shapeColor = "green";
  gobj4 = createSprite(400,100,50,50);
  gobj4.shapeColor = "green";

 movingRect.velocityY=-5;
 fixedRect.velocityY=5;  
}

function draw() {
  background(0); 
  //movingRect.x = World.mouseX;
 //movingRect.y = World.mouseY; 
  bounceOff(movingRect,fixedRect);
 
  //console.log(movingRect.x -fixedRect.x );
  drawSprites();
}


 /*
 if(isTouching(movingRect, gobj2 )){
  gobj2.shapeColor="blue";
  movingRect.shapeColor  = "blue";
 }
 else{
  gobj2.shapeColor="green";
  movingRect.shapeColor  = "green";
 }
 */