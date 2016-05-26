var PersonBuilder = (function () {
    function PersonBuilder(greeterFactory) {
        this.greeterFactory = greeterFactory;
    }
    PersonBuilder.prototype.getPersonForCulture = function (cultureId) {
        return new Person(cultureId, this.greeterFactory);
    };
    return PersonBuilder;
}());
//# sourceMappingURL=PersonFactory.js.map