class PinkBlock{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:1.0,
            density:0.1
        }
        this.body=Bodies.rectangle(x,y,30,40,options);
        this.width=width;
        this.height=height;
  
        World.add(world,this.body);
    }
  
    display(){
        var pos =this.body.position;
        push();
        rectMode(CENTER);
        stroke("white");
        strokeWeight(4);
        fill (255,192,203);
        rect(pos.x, pos.y, 30, 40);
        pop(); 
    }
  }