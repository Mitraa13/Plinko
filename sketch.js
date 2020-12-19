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

  ground.display();

    for (var i = 0; i < plinkos.length; i++) {     
      plinkos[i].display();     
    }
    for (var k = 0; k < divisions.length; k++) {     
      divisions[k].display();
    }

    if(particle!=null){
      
      particle.display();

        if(particle.body.position.y>760){

          if(particle.body.position.x<80){
            score = score+50;        
          }
          if(particle.body.position.x>81 && particle.body.position.x<160){
            score = score+100;          
          }
          if(particle.body.position.x>161 && particle.body.position.x<240){
            score = score+500;          
          }
          if(particle.body.position.x>241 && particle.body.position.x<320){
            score = score+10;  
          }
          if(particle.body.position.x>321 && particle.body.position.x<400){
            score = score+1000;          
          }
          if(particle.body.position.x>401 && particle.body.position.x<480){
            score = score+2000;
          }
          if(particle.body.position.x>481 && particle.body.position.x<560){
            score = score+10;        
          }
          if(particle.body.position.x>561 && particle.body.position.x<640){
            score = score+500;          
          }
          if(particle.body.position.x>641 && particle.body.position.x<720){
            score = score+100;        
          }
          if(particle.body.position.x>721 && particle.body.position.x<800){
            score = score+100;          
          }

            particle = null;
            if(turn>=5)
             gameState = "end";
          
        }
    }
    
        
      if(gameState === "end"){
        textSize(60);
        fill("white");
        stroke("white");
        text("Game Over", width/2-150,height/2-150);
        }

      stroke("white");
      fill("white");
      textSize(30);
      text("50",25,650);
      text("100",97,650);
      text("500",177,650);
      text("10",265,650);
      text("1000",327,650);
      text("2000",407,650);
      text("10",503,650);
      text("500",577,650);
      text("100",655,650);
      text("50",743,650);

}
    
  


function mousePressed(){
  if(gameState!== "end"){
    turn++
    particle = new Particle(mouseX,10,10,10);
   
  }
}