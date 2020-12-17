const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var gameState = "play";
var score =0;
var particle;
var turn = 0;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) {    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50){    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50){    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50){    
       plinkos.push(new Plinko(j,375));
    }  
    
}
 


function draw() {
  background("black");

  fill("pink");
  stroke("black");
  textSize(20)
  text("Score : "+score,20,30);

  Engine.update(engine);

  stroke("white");
  fill("white");
  textSize(30);
  text("500",15,650);
  text("500",97,650);
  text("500",177,650);
  text("500",255,650);
  text("100",333,650);
  text("100",415,650);
  text("100",495,650);
  text("200",577,650);
  text("200",655,650);
  text("200",733,650);

    for (var i = 0; i < plinkos.length; i++) {     
      plinkos[i].display();     
    }
    for (var k = 0; k < divisions.length; k++) {     
      divisions[k].display();
    }

    if(particle!=null){
      
      particle.display();

      if(particle.body.position.y>760){

        if(particle.body.position.x<300){
          score = score+500;
          particle = null;
            if(turn>=5){
              gameState = "end";
            }
        }
        if(particle.body.position.x>301 && particle.body.position.x<500){
          score = score+100;
          particle = null;
            if(turn>=5){
              gameState = "end";
            }
        }
        if(particle.body.position.x>501){
          score = score+200;
          particle = null;
            if(turn>=5){
              gameState = "end";
            }
        }
        
      }
    }

}

function mousePressed(){
  if(gameState!== "end"){
    turn++
    particle = new Particle(mouseX,10,10,10);
    if(turn >= 5){
    textSize(60);
    fill("white");
    stroke("white");
    text("Game Over", width/2-150,height/2-150);
    }
  }
}