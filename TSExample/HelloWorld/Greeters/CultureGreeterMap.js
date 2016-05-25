var CultureGreeterMap = (function () {
    function CultureGreeterMap() {
        return {
            'de': new GermanGreeter(),
            'us': new Greeter()
        };
    }
    return CultureGreeterMap;
}());
//# sourceMappingURL=CultureGreeterMap.js.map