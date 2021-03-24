class Sling{
    constructor(body1, pointB){

        var properties = {
            bodyA: body1,
            pointB: pointB,
            stiffness: 0.004,
            length: 10

        }

        this.sling = Constraint.create(properties);

        this.bodyA = body1;
        this.pointB = pointB;

        World.add(world, this.sling);

    }

    launch(){
        this.sling.bodyA = null;
    }

    attach(bodyA){

        this.sling.bodyA = bodyA;

    }

    display(){

        if(this.sling.bodyA){
            
            strokeWeight(5);
            stroke("magenta");
            line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x, this.pointB.y);
            noStroke();

        }

    }
}