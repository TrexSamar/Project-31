class Drop{

constructor(x,y){
 
    var options={

        friction: 0.1,

    }


        this.body = Bodies.circle(x,y,2,options);
       
        World.add(world, this.body);  World.add(world, this.body);
}
         


    


        display(){      
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x, pos.y, 3, 4)

    }

    update(){
        if(this.body.position.y >=400){

            Matter.Body.setPosition(this.body, {x: random  (0,400), y: random(0, 400)})

        }


    }

}

 
