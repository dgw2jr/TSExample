var GreeterFactory = (function () {
    function GreeterFactory() {
    }
    GreeterFactory.prototype.getForCulture = function (cultureId) {
        var impl = new Greeter();
        if (cultureId === 'de') {
            impl = new GermanGreeter();
        }
        return impl;
    };
    return GreeterFactory;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JlZXRlckZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHcmVldGVyRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUFBO0lBY0EsQ0FBQztJQVRHLHNDQUFhLEdBQWIsVUFBYyxTQUFpQjtRQUMzQixJQUFJLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRXpCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQy9CLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFkRCxJQWNDIn0=