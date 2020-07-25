class Dustbin{
    constructor() {
        var options = {
          //restitution:0.8,
            isStatic:true,
            density:5,
            friction:1,
            isfixed:true
            

        }
        this.body1 = Bodies.rectangle(1000,355,120,20,options);
        this.body2 = Bodies.rectangle(1000,315,20,100,options);
        this.body3 = Bodies.rectangle(1100,315,20,100,options);
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body1);
        World.add(world, this.body2);
        World.add(world, this.body3);
      }
      display(){
        var pos =this.body1.position;
        push();
        translate(1050,320);
        imageMode(CENTER);
        image(this.image,0,0,120,120);
        
        pop();

      }
}