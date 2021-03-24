const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;

var platform1, platform2;

//Boxes on first platform

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box1, box10, box11, box12, box13;

//Boxes on second platform

var box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26

var polygon;

var slingShot;

var backColor;

var score = 0;

var gameState = "Launch";

function preload()
{
	getTime();
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width / 2, height - 50, width, 100);

	platform1 = new Ground(1000, 650, 450, 20);
	platform2 = new Ground(1600, 500, 450, 20);

	polygon = new Polygon(150, 550, 60);

	slingShot = new Sling(polygon.body, {x: 150, y: 550});

	//Level 1

	box1 = new Box(840, 604, 60, 60);
	box2 = new Box(900, 604, 60, 60);
	box3 = new Box(960, 604, 60, 60);
	box4 = new Box(1020, 604, 60, 60);
	box5 = new Box(1080, 604, 60, 60);
	box6 = new Box(1140, 604, 60, 60);

	//Level 2

	box7 = new Box(900, 624, 60, 60);
	box8 = new Box(960, 624, 60, 60);
	box9 = new Box(1020, 624, 60, 60);
	box10 = new Box(1080, 624, 60, 60);

	//Level 3

	box11 = new Box(960, 644, 60, 60);
	box12 = new Box(1020, 644, 60, 60);

	//Level 4

	box13 = new Box(990, 424, 60, 60)

	//Level 1

	box14 = new Box(1440, 444, 60, 60);
	box15 = new Box(1500, 404, 60, 60);
	box16 = new Box(1560, 404, 60, 60);
	box17 = new Box(1620, 404, 60, 60);
	box18 = new Box(1680, 404, 60, 60);
	box19 = new Box(1740, 444, 60, 60);
	
	//Level 2
	
	box20 = new Box(1500, 424, 60, 60);
	box21 = new Box(1560, 424, 60, 60);
	box22 = new Box(1620, 424, 60, 60);
	box23 = new Box(1680, 424, 60, 60);
	
	//Level 3
	
	box24 = new Box(1560, 444, 60, 60);
	box25 = new Box(1620, 444, 60, 60);

	//Level 4
	
	box26 = new Box(1590, 304, 60, 60)

	Engine.run(engine);
  
}


function draw() {

  if (backColor){
	rectMode(CENTER);
	background(backColor);
  
	platform1.display();
	platform2.display();
  
	//First platform boxes
  
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	
	box7.display();
	box8.display();
	box9.display();
	box10.display();
	
	box11.display();
	box12.display();
	
	box13.display();
	
	// Second platform boxes
  
	box14.display();
	box15.display();
	box16.display();
	box17.display();
	box18.display();
	box19.display();
	
	box20.display();
	box21.display();
	box22.display();
	box23.display();
	
	box24.display();
	box25.display();
	
	box26.display();

	box1.score();
	box2.score();
	box3.score();
	box4.score();
	box5.score();
	box6.score();
	
	box7.score();
	box8.score();
	box9.score();
	box10.score();
	
	box11.score();
	box12.score();
	
	box13.score();
	
	// Second platform boxes
  
	box14.score();
	box15.score();
	box16.score();
	box17.score();
	box18.score();
	box19.score();
	
	box20.score();
	box21.score();
	box22.score();
	box23.score();
	
	box24.score();
	box25.score();
	
	box26.score();	

	fill("black");
	textSize(20);
	text("Score: " + score, 1730, 40);
  
	polygon.display();
  
	slingShot.display();
  
	ground.display();
  
	drawSprites();
  
	fill("black");
	textSize(20);
	text(mouseX + " ' " + mouseY, mouseX, mouseY);
   
  } 
}

function mouseDragged(){

	if(gameState == "Launch"){

		Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});

	}

}

function mouseReleased(){

	slingShot.launch();

	gameState = "Play";

}

function keyPressed(){
	
	if(keyCode == 32 && gameState == "Play"){

		Matter.Body.setPosition(polygon.body, {x: 150, y: 550});

		slingShot.attach(polygon.body);

		gameState = "Launch";

	}

}

async function getTime() {

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var responseJson = await response.json();

    var time = responseJson.datetime.slice(11, 13);

    if(time > 05 && time <= 19){
        backColor = "lightBlue";
    }else{
        backColor = "black";
    }

    console.log(time);

}
