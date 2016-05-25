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
//# sourceMappingURL=Validation.js.map