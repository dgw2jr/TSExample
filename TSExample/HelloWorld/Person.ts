class Person {
    constructor(builder: IPersonBuilder) {
        this.cultureId = builder.cultureId;
        this.sayHello = builder.sayHello;
    }

    cultureId: string;
    sayHello: () => string;
}