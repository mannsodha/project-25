
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	box = new Box(500,560,200,20);
	box2 = new Box(200,560,200,20);
	box3 = new Box(370,650,20,200);
  ball = new Ball(100,560,5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(288);
  box.display(); 
  box2.display();
  box3.display();
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

}

}



