class SaysHello {
    constructor(private cultureId: string, private greeterFactory: IGreeterFactory) { }

    sayHello = () => this.greeterFactory.getForCulture(this.cultureId).greet();
}