var GreeterFactoryV2 = (function () {
    /*
        Now I realize maybe we will have more than two greeters to select from some day and
        I'd like to avoid adding an if statement to my factory every time that requirement changes.
        If there were 20 greeters to choose from the cyclomatic complexity of our method could
        grow beyond the threshold set in our tools that check for excessive complexity.
     */
    function GreeterFactoryV2(cultureGreeterMap) {
        this.cultureGreeterMap = cultureGreeterMap;
    }
    GreeterFactoryV2.prototype.getForCulture = function (cultureId) {
        return this.cultureGreeterMap[cultureId] || this.cultureGreeterMap['us'];
    };
    return GreeterFactoryV2;
}());
//# sourceMappingURL=GreeterFactoryV2.js.map