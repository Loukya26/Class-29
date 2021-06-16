const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  ground = new Ground(250,650,500,20)
  rope = new Rope(10,{x:250,y:100})
  var fruit_options = {
    density:0.001

  }
  fruit = Bodies.circle(300,300,20,fruit_options)
  Matter.Composite.add(rope.body,fruit)
  fruitConstraint = new Link(rope,fruit)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(fruit.position.x,fruit.position.y,20,20)

   
  ground.display()
  rope.show()
}




