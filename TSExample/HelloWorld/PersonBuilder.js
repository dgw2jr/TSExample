var PersonBuilder = (function () {
    function PersonBuilder(greeterFactory) {
        var _this = this;
        this.greeterFactory = greeterFactory;
        this.withCulture = function (cultureId) {
            _this.mCultureId = cultureId;
            return _this;
        };
        this.build = function () {
            return new Person(_this);
        };
    }
    Object.defineProperty(PersonBuilder.prototype, "cultureId", {
        get: function () {
            return this.mCultureId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonBuilder.prototype, "sayHello", {
        get: function () {
            return this.greeterFactory.getForCulture(this.mCultureId).greet;
        },
        enumerable: true,
        configurable: true
    });
    return PersonBuilder;
}());
//# sourceMappingURL=PersonBuilder.js.map