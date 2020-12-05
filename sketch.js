var fixedRect, movingRect
function setup() {
  createCanvas(600,600);
  fixedRect=createSprite(100, 300, 50, 50);
  movingRect=createSprite(500, 300, 50, 50);
  movingRect.shapeColor="olive"
  fixedRect.shapeColor="chocolate"
fixedRect.velocityX=5
movingRect.velocityX=-5
}

function draw() {
  background("cyan");  
 // movingRect.x=World.mouseX
  //movingRect.y=World.mouseY
// isTouching(movingRect,fixedRect)
bounceOff(movingRect,fixedRect)
  drawSprites();
}
function isTouching(movingRect,fixedRect){
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
      movingRect.shapeColor="black";
      fixedRect.shapeColor="red";
    }
    else{
      movingRect.shapeColor="olive"
  fixedRect.shapeColor="chocolate"
    }
}
function bounceOff(movingRect,fixedRect){
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
    
      movingRect.velocityX=movingRect.velocityX*(-1)
      fixedRect.velocityX=fixedRect.velocityX*(-1)
    }
    if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
      //movingRect.shapeColor="olive"
  //fixedRect.shapeColor="chocolate"
  movingRect.velocityY=movingRect.velocityY*(-1)
  fixedRect.velocityY=fixedRect.velocityY*(-1)
    }
}