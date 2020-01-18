var foo:number = '123';

interface Point2D {
    x: number;
    y: number
};

var point2D: Point2D = { x:0, y:10}

function iTakePoint2D(point: Point2D) {
    //Do something
}

iTakePoint2D({x:0})

function add(a,b) {
    return 
        a+b;
}

class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2);

console.log(p3);