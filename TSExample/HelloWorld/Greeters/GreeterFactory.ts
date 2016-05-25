class GreeterFactory implements IGreeterFactory {
    /*
        My original factory only assumes there are two implementations that can be provided, and so
        a simple if statement would suffice.
    */
    getForCulture(cultureId: string): IGreetBehavior {
        let impl = new Greeter();

        if (cultureId === 'de') {
            impl = new GermanGreeter();
        }

        return impl;
    }
}