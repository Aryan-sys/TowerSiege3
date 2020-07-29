const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var object1 , object2;
var box1,box2, box3,box4,box5,box6,box7,box8,box9,box10;  
var polygon;
var slingshot;
var score = 0;
var backgroundIMG;

function preload(){
 t();
}
function setup() {
  createCanvas(800,700);

 
  engine = Engine.create();
  world = engine.world;
  
 object1 = new Ground( 400, 600,3000, 10);
 object2 = new Ground(600, 590, 400, 10);

 box3 = new Box(540,580);
  box1 = new Box(600,570);
  box2 = new Box(660,570);
  box4 = new Box(720,570);
  box6 = new Box(570,510);
  box5 = new Box(630,510);
  box7 = new Box(690,510);
  box8 = new Box(600,460);
  box9 = new Box(660,460);
  box10 = new Box(630,400);

  polygon = new Pol;
  slingshot = new SlingShot(polygon.body,{x: 200,y: 400});
 
}

function draw() {
  if(backgroundIMG)
  background(backgroundIMG);  
  
  textSize(35);
  fill("red");
  text("Score " + score, width - 300, 50);
  console.log(score);
  Engine.update(engine);
  object1.display();
  object2.display();
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

 polygon.display();
 slingshot.display();
  drawSprites();
}
function mouseDragged(){

	Matter.Body.setPosition(polygon.body,{x:mouseX , y : mouseY})
}
function mouseReleased(){
	
	slingshot.fly();

}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(polygon.body);
  }
}
async function t(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();

  var datetime  = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour >= 06 && hour <= 19){
    bg = "4.png"
    console.log("hello")
  }
  else{
    bg = "5.png"
  }
  backgroundIMG = loadImage(bg);
}