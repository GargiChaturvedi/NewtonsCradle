const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, bob1, bob2, bob3, bob4, bob5, roof, rope1, rope2, rope3, rope4, rope5;

function setup() {
  createCanvas(1280,610);
  engine = Engine.create();
  world = engine.world;

  roof = new Roof(600, 50, 800, 30);

  bob5 = new Bob(425, 500, 50);
  bob4 = new Bob(375, 500, 50);
  bob3 = new Bob(325, 500, 50);
  bob2 = new Bob(275, 500, 50);
  bob1 = new Bob(225, 500, 50);

  rope1 = new Rope(bob1.body, roof.body, -100, 0);
  rope2 = new Rope(bob2.body, roof.body, -50, 0);
  rope3 = new Rope(bob3.body, roof.body, 0, 0);
  rope4 = new Rope(bob4.body, roof.body, 50, 0);
  rope5 = new Rope(bob5.body, roof.body, 100, 0);
}

function draw() {
  Engine.update(engine);
  background(0);
  roof.display();
  bob5.display();
  bob4.display();
  bob3.display();
  bob2.display();
  bob1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed() {
  var move = {
    x: -550,
    y: -550
  }
  var force = {
    x: 550,
    y: 550
  }
  if(keyCode === UP_ARROW) {
    Body.applyForce(bob1.body, bob1.body.position, move);
  }
  if(keyCode === DOWN_ARROW) {
    Body.applyForce(bob1.body, bob1.body.position, move);
    Body.applyForce(bob2.body, bob2.body.position, move);
  }
  if(keyCode === LEFT_ARROW) {
    Body.applyForce(bob1.body, bob1.body.position, move);
    Body.applyForce(bob5.body, bob5.body.position, force);
  }
}