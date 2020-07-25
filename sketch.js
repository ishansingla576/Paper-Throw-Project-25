const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	var canvas = createCanvas(1200, 400);
    engine = Engine.create();
	world = engine.world;

	//Create a Ground
  ground = new Ground(600, 380,1200,20);
  Paper = new paper(100,350,35,35);
  dustbin = new Dustbin();
 	Engine.run(engine);
  
}


function draw() {
  background("white ");
  Engine.update(engine)
  
  ground.display();
  Paper.display();
  dustbin.display();
  drawSprites();
 
}

function keyPressed(){
   if(keyCode === UP_ARROW ){
     Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});
   }
   

}

