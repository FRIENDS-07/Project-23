var helicopterImage, helicopter, package,packageImage;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var bodies;

var lowerPart, side1, side2;

function preload()
{
	helicopterImage=loadImage("helicopter.png")
	packageImage=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageImage);
	package.scale=0.2;

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterImage);
	helicopter.scale=0.6;

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true} );
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	lowerPart = new box(width/2,640,200,20);
	side1 = new box(310,580,20,100);
	side2 = new box(490,580,20,100);

	package.debug = false;
  	package.setCollider("rectangle" , 0,0,250,250);

}


function draw() {

  background("black");
  drawSprites();

  Engine.update(engine);

  package.x= packageBody.position.x;
  package.y= packageBody.position.y;

  packageBody.y = helicopter.y;

  lowerPart.display();
  side1.display();
  side2.display();

}

function keyPressed() {

 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.setStatic(packageBody , false)

  }
}



