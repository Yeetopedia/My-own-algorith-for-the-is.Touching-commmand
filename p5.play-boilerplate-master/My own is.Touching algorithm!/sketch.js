var movingRect, stationaryRect;
function setup() {
  createCanvas(800,400);

 movingRect=createSprite(200,200,50,50);
 movingRect.shapeColor="#bc8f8f";
 stationaryRect=createSprite(300,300,50,50);
stationaryRect.shapeColor="#bc8f8f";
 
}
function draw() {
  background("#ffd700");  
  movingRect.y=mouseY;
  movingRect.x= mouseX;

  if (movingRect.y-stationaryRect.y <= movingRect.height/2+stationaryRect.height/2 &&
    stationaryRect.y-movingRect.y <= movingRect.height/2+stationaryRect.height/2 && 
    stationaryRect.x-movingRect.x <= movingRect.width/2+stationaryRect.width/2 &&
    movingRect.x-stationaryRect.x <= movingRect.width/2 + stationaryRect.width/2
    ) 
      {
    movingRect.shapeColor="#ff00ff";
    stationaryRect.shapeColor="#ff0000";
  }

 else {

 
 movingRect.shapeColor="#ffd700";
 stationaryRect.shapeColor="#ffd700";
 }
 movingRect.depth +=1;

 movingRect.debug=false;
 stationaryRect.debug=false;
  drawSprites();

}