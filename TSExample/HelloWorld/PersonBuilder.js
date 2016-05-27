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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc29uQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBlcnNvbkJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7SUFDSSx1QkFBb0IsY0FBK0I7UUFEdkQsaUJBcUJDO1FBcEJ1QixtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFZbkQsZ0JBQVcsR0FBRyxVQUFDLFNBQWlCO1lBQzVCLEtBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxLQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFBO1FBRUQsVUFBSyxHQUFHO1lBQ0osTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQTtJQW5Cc0QsQ0FBQztJQUl4RCxzQkFBSSxvQ0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDcEUsQ0FBQzs7O09BQUE7SUFVTCxvQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkMifQ==