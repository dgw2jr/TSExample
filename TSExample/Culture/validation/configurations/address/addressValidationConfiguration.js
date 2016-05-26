var Validation;
(function (Validation) {
    var Configurations;
    (function (Configurations) {
        var Factories;
        (function (Factories) {
            function mailingAddressValidatableObject() {
                return {
                    postalCode: {
                        us: Configurations.PostalCode.usPostalCode(),
                        ca: Configurations.PostalCode.canadianPostalCode(),
                        ia: Configurations.PostalCode.iowaPostalCode(Configurations.PostalCode.usPostalCode())
                    },
                    city: {
                        us: Configurations.City.usCity()
                    }
                };
            }
            Factories.mailingAddressValidatableObject = mailingAddressValidatableObject;
            streetAddressValidatableObject.$inject = ['mailingAddressValidatableObject'];
            function streetAddressValidatableObject(mailing) {
                var config = {
                    line1: {
                        us: Configurations.Line1.usLine1()
                    }
                };
                return angular.merge({}, mailing, config);
            }
            Factories.streetAddressValidatableObject = streetAddressValidatableObject;
        })(Factories = Configurations.Factories || (Configurations.Factories = {}));
    })(Configurations = Validation.Configurations || (Validation.Configurations = {}));
})(Validation || (Validation = {}));
var Validation;
(function (Validation) {
    var Configurations;
    (function (Configurations) {
        var Line1;
        (function (Line1) {
            function usLine1() {
                return {
                    maxLength: 40,
                    minLength: 1,
                    required: true,
                    pattern: /^((?!((P(OST)?.?\s*(O(FF(ICE)?)?)?.?\s*(B(IN|OX))?)|B(IN|OX))\s*\d+))/i,
                    patternMessage: 'PO Boxes are not allowed for this field'
                };
            }
            Line1.usLine1 = usLine1;
        })(Line1 = Configurations.Line1 || (Configurations.Line1 = {}));
    })(Configurations = Validation.Configurations || (Validation.Configurations = {}));
})(Validation || (Validation = {}));
var Validation;
(function (Validation) {
    var Configurations;
    (function (Configurations) {
        var City;
        (function (City) {
            function usCity() {
                return {
                    maxLength: 40,
                    minLength: 1,
                    required: true,
                    pattern: /[A-z\D]+/
                };
            }
            City.usCity = usCity;
        })(City = Configurations.City || (Configurations.City = {}));
    })(Configurations = Validation.Configurations || (Validation.Configurations = {}));
})(Validation || (Validation = {}));
var Validation;
(function (Validation) {
    var Configurations;
    (function (Configurations) {
        var PostalCode;
        (function (PostalCode) {
            function iowaPostalCode(usPostalCode) {
                return {
                    required: usPostalCode.required,
                    maxLength: usPostalCode.maxLength,
                    minLength: usPostalCode.minLength,
                    pattern: /5[0-2]([0-7][0-9][1-9]|80[0-9])/,
                    placeholder: '50001 to 52809'
                };
            }
            PostalCode.iowaPostalCode = iowaPostalCode;
            function canadianPostalCode() {
                return {
                    maxLength: 6,
                    minLength: 6,
                    required: true
                };
            }
            PostalCode.canadianPostalCode = canadianPostalCode;
            function usPostalCode() {
                return {
                    maxLength: 9,
                    minLength: 5,
                    required: true,
                    pattern: /\d{5}|\d{9}/,
                    placeholder: '00501 to 99950'
                };
            }
            PostalCode.usPostalCode = usPostalCode;
        })(PostalCode = Configurations.PostalCode || (Configurations.PostalCode = {}));
    })(Configurations = Validation.Configurations || (Validation.Configurations = {}));
})(Validation || (Validation = {}));
//# sourceMappingURL=addressValidationConfiguration.js.map