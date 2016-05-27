var Validation;
(function (Validation) {
    var Configurations;
    (function (Configurations) {
        var Factories;
        (function (Factories) {
            function mailingAddressValidatableObject() {
                return {
                    line1: {
                        us: {
                            maxLength: 40,
                            minLength: 2,
                            required: true,
                            messages: {
                                maxLength: 'Must be 40 characters or less',
                                minLength: 'Must be at least 2 characters long',
                                required: 'This field is required'
                            }
                        }
                    },
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
                        us: Configurations.Line1.usLine1NoPoBox()
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
            function usLine1NoPoBox() {
                return {
                    maxLength: 40,
                    minLength: 1,
                    required: true,
                    pattern: /^((?!((P(OST)?.?\s*(O(FF(ICE)?)?)?.?\s*(B(IN|OX))?)|B(IN|OX))\s*\d+))/i,
                    messages: {
                        maxLength: 'Must be less than 40 characters',
                        minLength: 'Must be at least 1 character',
                        required: 'This field is required',
                        pattern: 'PO Boxes are not allowed for this field'
                    }
                };
            }
            Line1.usLine1NoPoBox = usLine1NoPoBox;
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
                    pattern: /[A-z\D]+/,
                    messages: {
                        maxLength: 'Must be less than 40 characters',
                        minLength: 'Must be at least 1 character',
                        required: 'This field is required',
                        pattern: 'Alpha characters only'
                    }
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
                    placeholder: '50001 to 52809',
                    messages: usPostalCode.messages
                };
            }
            PostalCode.iowaPostalCode = iowaPostalCode;
            function canadianPostalCode() {
                return {
                    maxLength: 7,
                    minLength: 6,
                    required: true,
                    pattern: /^(\D{1}\d{1}\D{1}).(\d{1}\D{1}\d{1})?$/,
                    formatter: function (value) {
                        return value.replace(/^(\D{1}\d{1}\D{1})(\d{1}\D{1}\d{1})?$/, function (m, p1, p2) { return p2 ? p1 + "-" + p2 : p1; });
                    },
                    messages: {
                        maxLength: 'Must be 7 characters or less',
                        minLength: 'Must be at least 6 characters long',
                        required: 'This field is required',
                        pattern: 'Invalid Canadian postal code format'
                    }
                };
            }
            PostalCode.canadianPostalCode = canadianPostalCode;
            function usPostalCode() {
                return {
                    maxLength: 10,
                    minLength: 5,
                    required: true,
                    pattern: /\d{5}|\d{9}/,
                    placeholder: '00501 to 99950',
                    formatter: function (value) {
                        return value.replace(/^(\d{5})(\d{4})?$/, function (m, p1, p2) { return p2 ? p1 + "-" + p2 : p1; });
                    },
                    messages: {
                        maxLength: 'Must be 10 characters or less',
                        minLength: 'Must be at least 5 characters long',
                        required: 'This field is required',
                        pattern: 'Not a valid postal code'
                    }
                };
            }
            PostalCode.usPostalCode = usPostalCode;
        })(PostalCode = Configurations.PostalCode || (Configurations.PostalCode = {}));
    })(Configurations = Validation.Configurations || (Validation.Configurations = {}));
})(Validation || (Validation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc1ZhbGlkYXRpb25Db25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkcmVzc1ZhbGlkYXRpb25Db25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsVUFBVSxDQW9DbkI7QUFwQ0QsV0FBVSxVQUFVO0lBQUMsSUFBQSxjQUFjLENBb0NsQztJQXBDb0IsV0FBQSxjQUFjO1FBQUMsSUFBQSxTQUFTLENBb0M1QztRQXBDbUMsV0FBQSxTQUFTLEVBQUMsQ0FBQztZQUMzQztnQkFDSSxNQUFNLENBQUM7b0JBQ0gsS0FBSyxFQUFFO3dCQUNMLEVBQUUsRUFBRTs0QkFDQSxTQUFTLEVBQUUsRUFBRTs0QkFDYixTQUFTLEVBQUUsQ0FBQzs0QkFDWixRQUFRLEVBQUUsSUFBSTs0QkFDZCxRQUFRLEVBQUU7Z0NBQ04sU0FBUyxFQUFFLCtCQUErQjtnQ0FDMUMsU0FBUyxFQUFFLG9DQUFvQztnQ0FDL0MsUUFBUSxFQUFFLHdCQUF3Qjs2QkFDckM7eUJBQ0o7cUJBQ0Y7b0JBQ0QsVUFBVSxFQUFFO3dCQUNSLEVBQUUsRUFBRSx5QkFBVSxDQUFDLFlBQVksRUFBRTt3QkFDN0IsRUFBRSxFQUFFLHlCQUFVLENBQUMsa0JBQWtCLEVBQUU7d0JBQ25DLEVBQUUsRUFBRSx5QkFBVSxDQUFDLGNBQWMsQ0FBQyx5QkFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO3FCQUMzRDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0YsRUFBRSxFQUFFLG1CQUFJLENBQUMsTUFBTSxFQUFFO3FCQUNwQjtpQkFDSixDQUFBO1lBQ0wsQ0FBQztZQXZCZSx5Q0FBK0Isa0NBdUI5QyxDQUFBO1lBRUQsOEJBQThCLENBQUMsT0FBTyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUM3RSx3Q0FBK0MsT0FBMkI7Z0JBQ3RFLElBQUksTUFBTSxHQUFHO29CQUNULEtBQUssRUFBRTt3QkFDSCxFQUFFLEVBQUUsb0JBQUssQ0FBQyxjQUFj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