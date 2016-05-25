interface IGreeterFactory {
    /*
        I am using a factory so I can keep the logic that decides what implementation to provide
        in one place. Dependents can use this factory to construct implementations instead of trying
        to figure out how to do it themselves.
    */
    getForCulture(cultureId: string): IGreetBehavior;
}