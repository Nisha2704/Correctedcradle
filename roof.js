class Roof {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(400,100,300,10,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, 300, 10);
    }
  };