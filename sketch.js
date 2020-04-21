const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

var pig1,pig2;

var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    box1 = new Box(800,355,70,70);
    pig1 = new Pig(885,365);
    box2 = new Box(970,350,70,70);
    log1 = new Log(885,310,280,PI/2)
   

    box3 = new Box(800,265,70,70);
    pig2 = new Pig(885,275);
    box4 = new Box(970,265,70,70);
    log2 = new Log(885,220,280,PI/2)

    log3 = new Log(830,190,150,PI/4);
    box5 = new Box(885,195,70,70);
    log4 = new Log(945,190,150,-PI/4);

    bird1 = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box5.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}