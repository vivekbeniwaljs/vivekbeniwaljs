
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var box1,bird;


function preload(){


}

function setup() {
 var canvas =	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,height,700,20)
   
    log1 = new log(610,130,300,PI/2)
    paper1 = new PaperObject(100,100)
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 Engine.update(engine);
ground.display();
log1.display();
paper1.display()

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === up_ARROW){
   
   Matter.Body.appluForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

  }


  }

