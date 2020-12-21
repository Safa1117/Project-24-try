
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var wall1,wall2,wall3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);

	paper = new Paper(100,100,50);

	wall1 = new Dustbin(400,650,200,20);
	
	wall2 = new Dustbin(300,600,20,100);
	
	wall3 = new Dustbin(500,600,20,100);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  wall1.display();
  wall2.display();
  wall3.display();


  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});
	 }
   }


