var speed, weight, deformation;
var car, wall;

function setup() {
  createCanvas(800,400);

  speed=random(55,90);
  weight=random(400,1500);
  deformation=(0.5*weight*speed*speed)/22500

  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;

  wall=createSprite(800,200,60,height/2);
  wall.shapeColor="orange";
}

function draw() {
  background(255,255,255);  

  if(car.isTouching(wall))
  {
    car.velocityX=0;
  }

  checkDeformation();

  drawSprites();
}

function checkDeformation()
{
  if(deformation>180 && car.isTouching(wall))
  {
    car.shapeColor="red";
  }

  else if((deformation>80 && deformation<=180) && car.isTouching(wall))
  {
    car.shapeColor="yellow";
  }

  else if((deformation<=80) && car.isTouching(wall))
  {
    car.shapeColor="green";
  }

  car.depth=wall.depth;
  car.depth++;
}