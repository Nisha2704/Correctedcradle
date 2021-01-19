class Slingshot{
    constructor(body1, body2,offsetX){
       
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:offsetX,y:0}
           
    }
   
       this.offsetX=offsetX
    this.slingshot=Matter.Constraint.create(options)
    World.add(world,this.slingshot)
    }
    display(){
            var pointA = this.slingshot.bodyA.position
            var pointB = this.slingshot.bodyB.position;
            push()
            strokeWeight(4);
            stroke("white")
            line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y);
            pop()
    }
}
    
    
    
    