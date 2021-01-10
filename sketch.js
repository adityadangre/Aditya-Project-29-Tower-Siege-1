const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //Ground Class
    ground = new Ground(600,380,1200,15);
    Stand1 = new Ground(550, 300, 300, 15);
    Stand2 = new Ground(1000, 150, 250, 15);

    //Block
    b1=new BlueBlock(460,200);
    b2=new BlueBlock(490,200);
    b3=new BlueBlock(520,200);
    b4= new BlueBlock(550,200);
    b5= new BlueBlock(580,200);
    b6= new BlueBlock(610,200);
    b7= new BlueBlock(640,200);

    b8= new PinkBlock(490,150);
    b9= new PinkBlock(520,150);
    b10= new PinkBlock(550,150);
    b11= new PinkBlock(580,150);
    b12= new PinkBlock(610,150);
  
    b13= new GreenBlock(520,100);
    b14= new GreenBlock(550,100);
    b15= new GreenBlock(580,100);
   
    b16=new SilverBlock(550,50);
    
    b17= new BlueBlock(950,130);
    b18= new BlueBlock(980,130);
    b19= new BlueBlock(1000,130);
    b20= new BlueBlock(1030,130);
    b21= new BlueBlock(1050,130);
   
    b22= new GreenBlock(980,90);
    b23= new GreenBlock(1010,90);
    b24= new GreenBlock(1025,90);
    
    b25= new PinkBlock(1000,50);

    poly= new Polygon(180,100);
    rope= new Rope(poly.body,{x:180,y:100});

}

function draw(){
    background("black");

    Engine.update(engine);

    textSize(30);
    fill("orange");
    stroke("white");
    strokeWeight(3);
    text("Drag The Hexagon Stone and Launch it towards the Blocks. ",20,50);

    ground.display();
    Stand1.display();
    Stand2.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();

    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();

    b13.display();
    b14.display();
    b15.display();

    b16.display();

    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();

    b22.display();
    b23.display();
    b24.display();

    b25.display();

    poly.display();
    rope.display();
      
}

function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}