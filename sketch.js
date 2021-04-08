
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boyImg, boy;
var sling;


function preload(){
	
	boyImg = loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	

	stoneObj = new Stone(250,200,30);
	stoneObj.scale=0.05;

	boy = createSprite(300,525,20,20);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	mango1=new mango(1100,100,30);
	mango2= new mango(1000,300,50);
	mango3= new mango(1000,80,40);
	mango4= new mango(900,150,30);
	mango5= new mango(1200,250,50);

	string = new Chain(stoneObj.body,{x:250, y:460});


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background("lightblue");
  //Add code for displaying text here!
  
  fill("black");
  textSize(30);
  text("Click space bar for a second chance", 100, 30);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display();
  groundObject.display();
  string.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);

  drawSprites();
}

function mouseDragged()
{
 Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
 string.fly();
}

function detectCollision(lstone, lmango)
{

	

 mangoBodyPosition = lmango.body.position
 stoneObjBodyPosition = lstone.body.position

  var distance = dist(stoneObjBodyPosition.x, stoneObjBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance<=lmango.r+lstone.r)
  {
	  Matter.Body.setStatic(lmango.body, false);
  }

}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stoneObj.body,{x:235, y:420})
		sling.attach(stoneObj.body);
  }
  
  
}
