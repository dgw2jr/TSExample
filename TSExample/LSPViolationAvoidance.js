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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTFNQVmlvbGF0aW9uQXZvaWRhbmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTFNQVmlvbGF0aW9uQXZvaWRhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0lBQUE7SUFRQSxDQUFDO0lBUFcsOEJBQVMsR0FBakIsVUFBa0IsS0FBZTtRQUM3QixNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELHdCQUFHLEdBQUgsVUFBSSxLQUFlO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQU0sS0FBSyxDQUFDLElBQUksU0FBTSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFFRDtJQUNJLGdCQUFvQixVQUFrQjtRQUFsQixlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQUksQ0FBQztJQUUzQyxzQkFBSSx3QkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLFNBQUEsSUFBSSxDQUFDLFVBQVUsRUFBSSxDQUFDLENBQUEsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUNMLGFBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQUVEO0lBQ0ksbUJBQW9CLEtBQWEsRUFBVSxNQUFjO1FBQXJDLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUU5RCxzQkFBSSwyQkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFFRDtJQUNJLGdCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFFdkMsc0JBQUksd0JBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxDQUFDLFNBQUEsSUFBSSxDQUFDLE1BQU0sRUFBSSxDQUFDLENBQUEsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFFRDtJQUNJLGtCQUFvQixVQUFrQixFQUFVLGNBQXNCO1FBQWxELGVBQVUsR0FBVixVQUFVLENBQVE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBUTtJQUFJLENBQUM7SUFFM0Usc0JBQUksMEJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELENBQUM7OztPQUFBO0lBQ0wsZUFBQztBQUFELENBQUMsQUFORCxJQU1DIn0=