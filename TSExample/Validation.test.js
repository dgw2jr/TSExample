describe('Validator', function () {
    var minLength = function (str, len) {
        if (!str) {
            return true;
        }
        return str.length >= len;
    };
    var maxLength = function (str, len) {
        return str.length < len;
    };
    var isPhone = function (phone) {
        return /^\d{3}\d{3}\d{4}$/.test(phone);
    };
    var required = function (input) {
        return !!input;
    };
    var rules = {
        addressLine1: [required, function (m) { return maxLength(m, 40); }],
        addressLine2: [function (m) { return maxLength(m, 40); }],
        city: [required, function (m) { return maxLength(m, 40); }]
    };
    it('should return false when a model property breaks rule', function () {
        var models = [
            {
                addressLine1: 'ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt',
                addressLine2: '',
                city: ''
            },
            {
                addressLine1: 'IPass',
                addressLine2: 'ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt',
                city: ''
            },
            {
                addressLine1: 'IPass',
                addressLine2: '',
                city: ''
            },
            {
                addressLine1: 'IPass',
                addressLine2: 'IPass',
                city: ''
            }
        ];
        var sut = new Validator();
        for (var model in models) {
            if (models.hasOwnProperty(model)) {
                var result = sut.isValid(models[model], rules);
                expect(result).toBe(false);
            }
        }
    });
    it('should return true when model properties pass all rules', function () {
        var models = [
            {
                addressLine1: 'IPass',
                addressLine2: 'IPass',
                city: 'IPass'
            }
        ];
        var sut = new Validator();
        for (var model in models) {
            if (models.hasOwnProperty(model)) {
                var result = sut.isValid(models[model], rules);
                expect(result).toBe(true);
            }
        }
    });
});
//# sourceMappingURL=Validation.test.js.map