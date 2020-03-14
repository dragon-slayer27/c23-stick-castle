const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(500,780,1000,20);
}

function draw() {
  background(231); 
  Engine.update(engine);
  fill(139,69,19) 
  rect(200,472,200,300);
  rect(600,472,200,300);
  rect(200,200,100,200);
  rect(700,200,100,200);
  fill(0,0,255)
  circle(500,620,200);
  rect(400,620,200,150);
  triangle(500,100,500,200,600,150);
  fill(0,0,139)
  rect(200,400,600,100);
  triangle(200,200,300,200,250,100);
  triangle(700,200,800,200,750,100);
  fill(210,105,30)
  quad(570,400,695,400,660,300,605,300);
  quad(440,400,565,400,530,300,475,300);
  quad(310,400,435,400,400,300,345,300);
  strokeWeight(3)
  line(500,100,500,300);
  drawSprites();
  ground.display();
}