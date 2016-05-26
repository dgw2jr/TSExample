var Tests;
(function (Tests) {
    describe('Greeter:', function () {
        describe('greet', function () {
            it('should return Hello, World', function () {
                var sut = new Greeter();
                var result = sut.greet();
                expect(result).toBe('Hello, World');
            });
        });
    });
    describe('GermanGreeter:', function () {
        describe('greet', function () {
            it('should return Guten tag', function () {
                var sut = new GermanGreeter();
                var result = sut.greet();
                expect(result).toBe('Guten tag');
            });
        });
    });
    describe('GreeterFactory:', function () {
        describe('getForCulture', function () {
            it('should return default Greeter when culture is US', function () {
                var sut = new GreeterFactory();
                var result = sut.getForCulture('us');
                expect(result instanceof Greeter).toBeTruthy();
            });
            it('should return German Greeter when culture is DE', function () {
                var sut = new GreeterFactory();
                var result = sut.getForCulture('de');
                expect(result instanceof GermanGreeter).toBeTruthy();
            });
        });
    });
    describe('GreeterFactoryV2:', function () {
        describe('getForCulture', function () {
            it('should return default Greeter when culture is US', function () {
                var sut = new GreeterFactoryV2(new CultureGreeterMap());
                var result = sut.getForCulture('us');
                expect(result instanceof Greeter).toBeTruthy();
            });
            it('should return German Greeter when culture is DE', function () {
                var sut = new GreeterFactoryV2(new CultureGreeterMap());
                var result = sut.getForCulture('de');
                expect(result instanceof GermanGreeter).toBeTruthy();
            });
        });
    });
    describe('Loose coupling', function () {
        it('should all work when I add a new greeter impl', function () {
            // Simulate writing a new implementation
            var newImpl = {
                greet: function () { return 'Sup yo!'; }
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
    describe('Person:', function () {
        var cultureMap = new CultureGreeterMap();
        var factory = new GreeterFactoryV2(cultureMap);
        it('should say hello', function () {
            var cultures = ['us', 'de', 'notexists'];
            cultures.forEach(function (culture) {
                var sut = new PersonBuilder(factory).withCulture(culture).build();
                expect(sut.sayHello()).toBe(factory.getForCulture(culture).greet());
            });
        });
    });
})(Tests || (Tests = {}));
//# sourceMappingURL=Greeter.test.js.map