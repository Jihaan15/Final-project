const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine , world;

var angle = 45;

var bg;
var ground;
var player;
var evilNinja

function preload(){
bg = loadImage("background1.jpg")

}

function setup() {
  createCanvas(displayWidth - 30,displayHeight - 20);
  engine = Engine.create()
  world = engine.world
  ground = new Ground(displayWidth/2,displayHeight/2  + 100,displayWidth,20);
  ground1 = new Ground(displayWidth/2,displayHeight/2-400,displayWidth,20)
  player = new Player(displayWidth/2-400,displayHeight/2 - 100,175,200)
  evilNinja = new EvilNinja(displayWidth/2+200,displayHeight/2-100,150,150)
  shuriken = new Shuriken(displayWidth/2,100,100,100)
  
}

function draw() {
  ground.display();
  ground1.display();
  background(bg); 
  
  Engine.update(engine) 
  player.display()
  evilNinja.display()
  shuriken.display()

  //rotate the body
  if(keyCode == 32){
Matter.Body.setAngle(shuriken.body,angle)
Matter.Body.setAngularVelocity(shuriken.body,0.45)
angle= angle+5
  }

}

