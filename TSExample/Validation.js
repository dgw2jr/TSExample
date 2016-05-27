var model = {
    firstName: '',
    lastName: 'LongLastName',
    phoneNumber: '1231231233'
};
var Validator = (function () {
    function Validator() {
    }
    Validator.prototype.isValid = function (model, rules) {
        var returnValue = true;
        for (var prop in model) {
            if (!model.hasOwnProperty(prop)) {
                continue;
            }
            for (var fn in rules[prop]) {
                if (!rules[prop].hasOwnProperty(fn)) {
                    continue;
                }
                var result = rules[prop][fn](model[prop]);
                console.log(prop + ': ' + result + '\r\n');
                if (result === false) {
                    returnValue = result;
                    break;
                }
            }
            if (returnValue === false) {
                break;
            }
        }
        return returnValue;
    };
    return Validator;
}());
var PersonModelController = (function () {
    function PersonModelController(validator) {
        var _this = this;
        this.validator = validator;
        this.minLength = function (str) {
            if (!str) {
                return true;
            }
            return str.length >= 5;
        };
        this.maxLength = function (str) {
            return str.length < 10;
        };
        this.isPhone = function (phone) {
            return /^\d{3}\d{3}\d{4}$/.test(phone);
        };
        this.required = function (input) {
            return !!input;
        };
        this.rules = {
            firstName: [this.required, this.minLength],
            lastName: [this.minLength, this.maxLength],
            phoneNumber: [this.isPhone]
        };
        this.isValid = function (model) {
            return _this.validator.isValid(model, _this.rules);
        };
    }
    return PersonModelController;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJBLElBQUksS0FBSyxHQUFHO0lBQ1IsU0FBUyxFQUFFLEVBQUU7SUFDYixRQUFRLEVBQUUsY0FBYztJQUN4QixXQUFXLEVBQUUsWUFBWTtDQUM1QixDQUFDO0FBRUY7SUFBQTtJQStCQSxDQUFDO0lBOUJHLDJCQUFPLEdBQVAsVUFBUSxLQUFRLEVBQUUsS0FBYTtRQUMzQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFdkIsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixRQUFRLENBQUM7WUFDYixDQUFDO1lBRUQsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEMsUUFBUSxDQUFDO2dCQUNiLENBQUM7Z0JBRUQsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUUxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO2dCQUUzQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDbkIsV0FBVyxHQUFHLE1BQU0sQ0FBQztvQkFDckIsS0FBSyxDQUFDO2dCQUNWLENBQUM7WUFDTCxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQztZQUNWLENBQUM7UUFDTCxDQUFDO1FBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBRUQ7SUFDSSwrQkFBb0IsU0FBd0M7UUFEaEUsaUJBZ0NDO1FBL0J1QixjQUFTLEdBQVQsU0FBUyxDQUErQjtRQUVwRCxjQUFTLEdBQUcsVUFBQyxHQUFHO1lBQ3BCLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDUCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFBO1FBRU8sY0FBUyxHQUFHLFVBQUMsR0FBRztZQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFBO1FBRU8sWUFBTyxHQUFHLFVBQUMsS0FBSztZQUNwQixNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQTtRQUVPLGFBQVEsR0FBRyxVQUFDLEtBQUs7WUFDckIsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbkIsQ0FBQyxDQUFBO1FBRU8sVUFBSyxHQUFXO1lBQ3BCLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMxQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDMUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUM5QixDQUFDO1FBRUYsWUFBTyxHQUFHLFVBQUMsS0FBbUI7WUFDMUIsTUFBTSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDO0lBOUI4RCxDQUFDO0lBK0JyRSw0QkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0MifQ==