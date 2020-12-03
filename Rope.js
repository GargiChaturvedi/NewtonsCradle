class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5,
            pointB: {x: this.offsetX, y: this.offsetY},
            length: 450
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;
        var Anchor2X = pointB.x + this.offsetX*2;
        var Anchor2Y = pointB.y + this.offsetY*2;
        strokeWeight(5);
        stroke("green");
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    }
}