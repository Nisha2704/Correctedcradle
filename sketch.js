
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof
var ball
var rope 
var engine
var world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof();
	ball = new Ball(280,450);
	ball1 = new Ball(340,450);
	ball2= new Ball(400,450);
	ball3= new Ball(460,450);
	ball4= new Ball(520,450);
	rope = new Slingshot(ball.body,roof.body,-100)
	rope1 = new Slingshot(ball1.body,roof.body,-50)
	rope2 = new Slingshot(ball2.body,roof.body,0)
	rope3 = new Slingshot(ball3.body,roof.body,50)
	rope4 = new Slingshot(ball4.body,roof.body,100)
	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  
 
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-100,y:50});
	
	}

}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}


