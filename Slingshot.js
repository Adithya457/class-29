class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image = loadImage("sprites/sling1.png");
        this.image1 = loadImage("sprites/sling2.png");
        this.image2 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image,200,20);
        image(this.image1,170,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("#301608");
            strokeWeight(4);
            line(pointA.x-15, pointA.y, pointB.x-15, pointB.y);
            line(pointA.x+20, pointA.y, pointB.x+20, pointB.y);
            image(this.image2,pointA.x-20,pointA.y-5);
        }
    }
    
}

