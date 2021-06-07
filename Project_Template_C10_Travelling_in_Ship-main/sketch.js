
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  
}

function setup(){
   createCanvas(400,400);
  
   sea = createSprite(200,200,400,400)
   sea.addImage(seaImg)
   sea.scale = 0.4
   sea.velocityX = -3
   
   Yacht = createSprite(200,250, 100,100)
   Yacht.addAnimation("ship" , shipImg1)
   Yacht.scale = 0.28
   
  
}

function draw() {
  background("blue");
  
  if(sea.x < 0){
    sea.x = 200
  
  }
 
  drawSprites()
}