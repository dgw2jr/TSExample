class CultureGreeterMap implements ICultureGreeterMap {
    constructor() {
        return {
            'de': new GermanGreeter(),
            'us': new Greeter()
        }
    }

    [index: string]: IGreetBehavior;
}