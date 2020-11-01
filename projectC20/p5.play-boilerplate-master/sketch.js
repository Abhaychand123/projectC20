var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
car = createSprite(50, 200, 50, 50);
wall = createSprite(1500, 200, 60, height/2);
speed=random(55,90);
width=random(400,1500);

car.velocityX=speed;

}

function draw() {
  background(0,0,2); 
  drawSprites();

  if (wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 *width *speed *speed/22509;
    if (deformation>180)
    {
      car.shapeColor=colour(255,0,0);
    }
    if (deformation<180&&deformation>100)
    {
      car.shapeColor=colour(230,230,0);
    }
    if (deformation<100)
    {
      car.shapeColor=colour(0,255,0);
    }
  }
  
  
}




