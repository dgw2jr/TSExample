var SaysHello = (function () {
    function SaysHello(cultureId, greeterFactory) {
        var _this = this;
        this.cultureId = cultureId;
        this.greeterFactory = greeterFactory;
        this.sayHello = function () { return _this.greeterFactory.getForCulture(_this.cultureId).greet(); };
    }
    return SaysHello;
}());
//# sourceMappingURL=SaysHello.js.map