const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score = 0;
var particle;
var turn = 0;
var gameState = "start";

var world,engine;
var divH = 300;

var particles;
var plinko = [];
var division = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  Engine.run(engine);
  world = engine.world;
 
  ground = new Ground(240,790,500,10);
  /*
  divider1 = new Division(480,480,5,250);
  divider2 = new Division(400,480,5,250);
  divider3 = new Division(320,480,5,250);
  divider4 = new Division(240,480,5,250);
  divider5 = new Division(160,480,5,250);
  divider6 = new Division(80,480,5,250);
  divider7 = new Division(0,480,5,250);
  */

   for (var j = 40; j <=innerWidth; j = j + 50){
    plinko.push(new Plinko(j,75));
   }
   for (var j = 15; j <=width-10; j=j+50){
    plinko.push(new Plinko(j,175));
   }
   for (var j = 40; j <=innerWidth; j = j + 50){
    plinko.push(new Plinko(j,275));
   }
   for (var j = 15; j <=width-10; j=j+50){
    plinko.push(new Plinko(j,375));
   }
   for (var k = 0; k <= width;k =k+80){
    division.push(new Division(k,height-divH/2,10,divH));
   }
}

function draw() {
  background(0); 
  console.log(particle); 
 
  if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){
      
      if(particle.body.position.x<300){
        score=score+500;
        particle=null;
        if(count>= 5) gameState = "end";
      }
      else if(particle.body.position.x<600 && particle.body.position.x>301){
        score=score+100;
        particle=null;
        if(count>= 5) gameState = "end";
      }
      else if(particle.body.position.x<900 && particle.body.position.x>601){
        score=score+200;
        particle=null;
        if(count>= 5) gameState = "end";
      }
    }
    

  }
for (var k  = 0;k < division.length; k++){
  division[k].display();
}

 /* divider1.display();
  divider2.display();
  divider3.display();
  divider4.display();
  divider5.display();
  divider6.display();
  divider7.display();
  */
  ground.display();
  for (var j = 0; j <plinko.length; j++){
    plinko[j].display();
   }
  drawSprites();
  text("500                200                 100                   100                     200                  500",30,600);
  text("score: " +score,20,30);
}

 function mousePressed(){
   if(gameState!=="end"){
     count++;
     particle = new Particle(mouseX,10,10,10);
     console.log("mousePressed");
   }
 }


