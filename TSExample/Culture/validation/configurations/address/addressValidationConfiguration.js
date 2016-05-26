var Validation;
(function (Validation) {
    var Configurations;
    (function (Configurations) {
        var Factories;
        (function (Factories) {
            function addressValidationConfiguration() {
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
            Factories.addressValidationConfiguration = addressValidationConfiguration;
        })(Factories = Configurations.Factories || (Configurations.Factories = {}));
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
                    patternDisplay: '50001 to 52809'
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
                    patternDisplay: '00501 to 99950'
                };
            }
            PostalCode.usPostalCode = usPostalCode;
        })(PostalCode = Configurations.PostalCode || (Configurations.PostalCode = {}));
    })(Configurations = Validation.Configurations || (Validation.Configurations = {}));
})(Validation || (Validation = {}));
//# sourceMappingURL=addressValidationConfiguration.js.map