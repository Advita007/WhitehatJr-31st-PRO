const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;


var maxDrops = 100
var rain;
drops1 = []
var rand

var thunderCreatedFrame=0;

var thunder, thunder1,thunder2,thunder3,thunder4;

function preload(){
  thunder1_Img = loadImage("images/thunderbolt/1.png")
  thunder2_Img = loadImage("images/thunderbolt/2.png")
  thunder3_Img = loadImage("images/thunderbolt/3.png")
  thunder4_Img = loadImage("images/thunderbolt/4.png")
  rain = loadImage("images/Rain.jpg")

  }

function setup() {
  
  createCanvas(600, 600);
  engine = Engine.create();
  world = engine.world;

  umbrella = new Umbrella(250,442,185); 
  
  if(frameCount % 150 === 0){
    for(var i = 0;i<maxDrops;i++){
      drops1.push(new Drops(random(0,600),random(0,600),6))
    }
   
}
 
  


   
    Engine.run(engine);


}
  





function draw() {
 
  Engine.update(engine)

  background(0);
  //Add code for displaying text here!

 



 

  
  rand = Math.round(random(1,4));
  if(frameCount%80===0){
      thunderCreatedFrame=frameCount;
      thunder = createSprite(random(10,370), random(10,30), 10, 10);
      switch(rand){
          case 1: thunder.addImage(thunder1_Img);
          break;
          case 2: thunder.addImage(thunder2_Img);
          break; 
          case 3: thunder.addImage(thunder3_Img);
          break;
          case 4: thunder.addImage(thunder4_Img);
          break;
          default: break;
      }
      thunder.scale = random(0.3,0.6)
  
  }

  if(thunderCreatedFrame + 10 === frameCount && thunder){
    thunder.destroy();
}

umbrella.display();


for(var i = 0;i<maxDrops;i++){
  drops1[i].display();
  }




 drawSprites();



}












