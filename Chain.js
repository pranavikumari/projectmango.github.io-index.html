class Chain{
    constructor(body,anchor){
        var options = {
            bodyA: body,
            //pointB: pointB,
            pointB: anchor,
            stiffness: 0.004,
            length: 10
        }

        this.bodyA = body;
        this.pointB= anchor;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA=body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            strokeWeight(4);
            stroke(0);
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
    }
    
    //function keyPressed() { if (keyCode === 32) { Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) launcherObject.attach(stoneObj.body);

}
