interface IHasArea {
    area: number;
}



class AreaLogger {
    private shapeType(shape: IHasArea) {
        return shape.constructor.toString().match(/\w+/g)[1];
    }

    log(shape: IHasArea): void {
        console.log(`Area of ${this.shapeType(shape)} : ${shape.area}\r\n`);
    }
}

class Square implements IHasArea {
    constructor(private sideLength: number) { }

    get area(): number {
        return this.sideLength ** 2;
    }
}

class Rectangle implements IHasArea {
    constructor(private width: number, private height: number) { }

    get area(): number {
        return this.width * this.height;
    }
}

class Circle implements IHasArea {
    constructor(private radius: number) { }

    get area(): number {
        return (this.radius ** 2) * Math.PI;
    }
}

class Triangle {
    constructor(private baseLength: number, private heightFromBase: number) { }

    get area(): number {
        return this.baseLength * this.heightFromBase / 2;
    }
}