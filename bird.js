class Bird{

    //properties
    
    constructor(x,y){
        
    
        var options={
            restitution: 0.7,
            friction: 0.3,
            density: 1.0
        }
    
    this.body=Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
    this.height = 50;
    World.add(world,this.body);
    
    }
    //functions
    
    display(){
    
        var pos=this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        strokeWeight (3);
        stroke ("red");
        rectMode(CENTER);
        fill ("red");
        rect(0,0,this.width,this.height);
        pop ();
    }
    
    }