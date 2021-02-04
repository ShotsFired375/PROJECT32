const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground1, wreckingBall, rope1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400, 395, 800, 10);

  box1 = new Box(572.5, 350, 50, 50);
  box2 = new Box(627.5, 350, 50, 50);
  box3 = new Box(682.5, 350, 50, 50);
  box4 = new Box(737.5, 350, 50, 50);
  box5 = new Box(600, 290, 50, 50);
  box6 = new Box(655, 290, 50, 50);
  box7 = new Box(710, 290, 50, 50);
  box8 = new Box(627.5, 230, 50, 50);
  box9 = new Box(682.5, 230, 50, 50);
  box10 = new Box(655, 100, 50, 50);

  wreckingBall = new Ball(200, 190, 30);

  rope1 = new Rope(wreckingBall.body, {x:175, y:170});
}


function draw() {
  background("red");
  Engine.update(engine);
  ground1.display();

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

  wreckingBall.display();

  rope1.display();

  if (keyCode==32) {
    Matter.Body.setPosition(wreckingBall.body, {x:175, y:170});
    rope1.attach(wreckingBall.body);
  }
}


function mouseDragged() {
  Matter.Body.setPosition(wreckingBall.body, {x:mouseX, y:mouseY});
}
function mouseReleased() {
  rope1.fly();
}

