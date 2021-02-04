class Ball {
    constructor (x,y,radius) {
        var options = {
            density: 1,
            frictionAir: 0.005
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("red");
        stroke("white");
        strokeWeight("3")
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius);
        pop();
    }
}