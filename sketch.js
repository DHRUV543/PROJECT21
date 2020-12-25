var bullet;
var wall1;
var speed,weight;

function setup() {
  createCanvas(800,400);
 wall1= createSprite(700, 200, 60,150);
 wall1.shapeColor="black"

bullet=createSprite(100,200,40,10)
bullet.shapeColor="white"

speed=Math.round(random(55,90))
weight=Math.round(random(400,1500))

 bullet.velocityX=speed;


}

function draw() {
  background(193); 
  if(wall1.x-bullet.x <(bullet.width+wall1.width)/2) 
   {
 bullet.vleocityX=0
 speed=0

  var deformation=0.5*weight*speed*speed/22509;

  if(deformation>30)
    {
wall1.shapeColor="red"
    }
  if(deformation<20 && deformation>10)
 {
    wall1.shapeColor="yellow"
  }

if(deformation<10)
{
  wall1.shapeColor="green"
}  
}
  drawSprites();
}