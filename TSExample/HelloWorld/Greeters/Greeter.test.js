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
            var newImpl = {
                greet: function () { return 'Sup yo!'; }
            };
            var map = new CultureGreeterMap();
            map['dsm'] = newImpl;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JlZXRlci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR3JlZXRlci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sS0FBSyxDQWtHWDtBQWxHRCxXQUFPLEtBQUssRUFBQyxDQUFDO0lBQ1YsUUFBUSxDQUFDLFVBQVUsRUFBRTtRQUNqQixRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ2QsRUFBRSxDQUFDLDRCQUE0QixFQUFFO2dCQUM3QixJQUFJLEdBQUcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO2dCQUV4QixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRXpCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLGdCQUFnQixFQUFFO1FBQ3ZCLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDZCxFQUFFLENBQUMseUJBQXlCLEVBQUU7Z0JBQzFCLElBQUksR0FBRyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7Z0JBRTlCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFFekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsaUJBQWlCLEVBQUU7UUFDeEIsUUFBUSxDQUFDLGVBQWUsRUFBRTtZQUN0QixFQUFFLENBQUMsa0RBQWtELEVBQUU7Z0JBQ25ELElBQUksR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7Z0JBRS9CLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFD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