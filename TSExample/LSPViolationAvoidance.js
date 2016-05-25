var AreaLogger = (function () {
    function AreaLogger() {
    }
    AreaLogger.prototype.shapeType = function (shape) {
        return shape.constructor.toString().match(/\w+/g)[1];
    };
    AreaLogger.prototype.log = function (shape) {
        console.log("Area of " + this.shapeType(shape) + " : " + shape.area + "\r\n");
    };
    return AreaLogger;
}());
var Square = (function () {
    function Square(sideLength) {
        this.sideLength = sideLength;
    }
    Object.defineProperty(Square.prototype, "area", {
        get: function () {
            return Math.pow(this.sideLength, 2);
        },
        enumerable: true,
        configurable: true
    });
    return Square;
}());
var Rectangle = (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Object.defineProperty(Rectangle.prototype, "area", {
        get: function () {
            return this.width * this.height;
        },
        enumerable: true,
        configurable: true
    });
    return Rectangle;
}());
var Circle = (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Object.defineProperty(Circle.prototype, "area", {
        get: function () {
            return (Math.pow(this.radius, 2)) * Math.PI;
        },
        enumerable: true,
        configurable: true
    });
    return Circle;
}());
var Triangle = (function () {
    function Triangle(baseLength, heightFromBase) {
        this.baseLength = baseLength;
        this.heightFromBase = heightFromBase;
    }
    Object.defineProperty(Triangle.prototype, "area", {
        get: function () {
            return this.baseLength * this.heightFromBase / 2;
        },
        enumerable: true,
        configurable: true
    });
    return Triangle;
}());
//# sourceMappingURL=LSPViolationAvoidance.js.map