class Particle {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution: 0.01
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.color=color(random(0,255),random(0,255),random(0,255));
     World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(pos.x, pos.y, 5,5);
    }
  };
