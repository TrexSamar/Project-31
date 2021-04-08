const Engine = Matter.Engine ;
const World = Matter.World;
const Bodies = Matter.Bodies;

var maxDrops = 100;

drops = [];

function preload(){
    
}

function setup(){
   
    createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    for(var i=0; i<maxDrops; i++){

        drops.push(new Drop(random(0,400), random(0,400)));

    }

}

function draw(){
    
    background(0);
    Engine.update(engine)

    if(frameCount %6 === 0){


         for(var i = 0; i < drops.length; i++){

            drops[i].update();
            drops[i].display();

         }
    }

}   

