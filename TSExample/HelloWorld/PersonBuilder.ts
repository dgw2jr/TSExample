interface IPersonBuilder {
    build(): Person;
    cultureId: string;
    sayHello: () => string;
    withCulture: (cultureId: string) => IPersonBuilder;
}

class PersonBuilder implements IPersonBuilder {
    constructor(private greeterFactory: IGreeterFactory) { }

    private mCultureId: string;

    get cultureId() {
        return this.mCultureId;
    }

    get sayHello() {
        return this.greeterFactory.getForCulture(this.mCultureId).greet;
    }

    withCulture = (cultureId: string) => {
        this.mCultureId = cultureId;
        return this;
    }

    build = (): Person => {
        return new Person(this);
    }
}