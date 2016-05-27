var GreeterFactoryV2 = (function () {
    function GreeterFactoryV2(cultureGreeterMap) {
        this.cultureGreeterMap = cultureGreeterMap;
    }
    GreeterFactoryV2.prototype.getForCulture = function (cultureId) {
        return this.cultureGreeterMap[cultureId] || this.cultureGreeterMap['us'];
    };
    return GreeterFactoryV2;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JlZXRlckZhY3RvcnlWMi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdyZWV0ZXJGYWN0b3J5VjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFPSSwwQkFBb0IsaUJBQXFDO1FBQXJDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7SUFBSSxDQUFDO0lBRTlELHdDQUFhLEdBQWIsVUFBYyxTQUFpQjtRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQyJ9