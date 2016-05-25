module Tests {
    describe('Greeter:', () => {
        describe('greet', () => {
            it('should return Hello, World', () => {
                var sut = new Greeter();

                var result = sut.greet();

                expect(result).toBe('Hello, World');
            });
        });
    });

    describe('GermanGreeter:', () => {
        describe('greet', () => {
            it('should return Guten tag', () => {
                var sut = new GermanGreeter();

                var result = sut.greet();

                expect(result).toBe('Guten tag');
            });
        });
    });

    describe('GreeterFactory:', () => {
        describe('getForCulture', () => {
            it('should return default Greeter when culture is US', () => {
                var sut = new GreeterFactory();

                var result = sut.getForCulture('us');

                expect(result instanceof Greeter).toBeTruthy();
            });

            it('should return German Greeter when culture is DE', () => {
                var sut = new GreeterFactory();

                var result = sut.getForCulture('de');

                expect(result instanceof GermanGreeter).toBeTruthy();
            });
        });
    });

    describe('GreeterFactoryV2:', () => {
        describe('getForCulture', () => {
            it('should return default Greeter when culture is US', () => {
                var sut = new GreeterFactoryV2(new CultureGreeterMap());

                var result = sut.getForCulture('us');

                expect(result instanceof Greeter).toBeTruthy();
            });

            it('should return German Greeter when culture is DE', () => {
                var sut = new GreeterFactoryV2(new CultureGreeterMap());

                var result = sut.getForCulture('de');

                expect(result instanceof GermanGreeter).toBeTruthy();
            });
        });
    });

    describe('Loose coupling', () => {
        it('should all work when I add a new greeter impl', () => {
            // Simulate writing a new implementation
            var newImpl: IGreetBehavior = {
                greet: () => 'Sup yo!'
            };

            // Simulate adding the greeter to the mapping dictionary
            var map = new CultureGreeterMap();
            map['dsm'] = newImpl;

            // Instantiate factory with augmented mapping dictionary
            var factory = new GreeterFactoryV2(map);

            var result = factory.getForCulture('dsm').greet();

            expect(result).toBe('Sup yo!');
        });
    });

    describe('SaysHello:', () => {
        var cultureMap = new CultureGreeterMap();
        var factory = new GreeterFactoryV2(cultureMap);

        it('should say hello', () => {
            var cultures = ['us', 'de', 'notexists'];
            cultures.forEach((culture) => {
                var sut = new SaysHello(culture, factory);

                expect(sut.sayHello()).toBe(factory.getForCulture(culture).greet());
            });
        });
    });
}