var GreeterFactory = (function () {
    function GreeterFactory() {
    }
    /*
        My original factory only assumes there are two implementations that can be provided, and so
        a simple if statement would suffice.
    */
    GreeterFactory.prototype.getForCulture = function (cultureId) {
        var impl = new Greeter();
        if (cultureId === 'de') {
            impl = new GermanGreeter();
        }
        return impl;
    };
    return GreeterFactory;
}());
//# sourceMappingURL=GreeterFactory.js.map