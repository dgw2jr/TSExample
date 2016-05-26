var Directives;
(function (Directives) {
    function validate() {
        return {
            restrict: 'E',
            require: 'ngModel',
            controller: 'ValidateController',
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                config: '<'
            },
            template: "<input type='text' \n                        ng-pattern='vm.config.pattern'\n                        ng-maxlength='vm.config.maxLength'\n                        ng-required='vm.config.required'\n                        placeholder='{{vm.config.patternDisplay}}' />",
            replace: true,
            link: function (scope, elem, attrs, ctrl) {
                if (!ctrl) {
                    return;
                }
            }
        };
    }
    Directives.validate = validate;
})(Directives || (Directives = {}));
var Controllers;
(function (Controllers) {
    var ValidateController = (function () {
        function ValidateController() {
        }
        return ValidateController;
    }());
    Controllers.ValidateController = ValidateController;
    var TestController = (function () {
        function TestController($scope) {
            $scope.cultures = [
                'us',
                'ca',
                'ia'
            ];
            $scope.address = {
                line1: '',
                line2: '',
                city: '',
                postalCode: '12345'
            };
            $scope.culture = $scope.cultures[0];
        }
        TestController.$inject = ['$scope'];
        return TestController;
    }());
    Controllers.TestController = TestController;
})(Controllers || (Controllers = {}));
var Factories;
(function (Factories) {
    function validationConfigurations() {
        return {
            address: {
                postalCode: {
                    us: usPostalCodeValidationConfiguration(),
                    ca: canadianPostalCodeValidationConfiguration(),
                    ia: iowaPostalCodeValidationConfiguration()
                }
            }
        };
    }
    Factories.validationConfigurations = validationConfigurations;
    function iowaPostalCodeValidationConfiguration() {
        return {
            required: true,
            maxLength: 5,
            minLength: 5,
            pattern: /5[0-2]([0-7][0-9][1-9]|80[0-9])/,
            patternDisplay: '50001 to 52809'
        };
    }
    Factories.iowaPostalCodeValidationConfiguration = iowaPostalCodeValidationConfiguration;
    function canadianPostalCodeValidationConfiguration() {
        return {
            maxLength: 6,
            minLength: 6,
            required: false
        };
    }
    Factories.canadianPostalCodeValidationConfiguration = canadianPostalCodeValidationConfiguration;
    function usPostalCodeValidationConfiguration() {
        return {
            maxLength: 9,
            minLength: 5,
            required: true,
            pattern: /\d{5}|\d{9}/
        };
    }
    Factories.usPostalCodeValidationConfiguration = usPostalCodeValidationConfiguration;
})(Factories || (Factories = {}));
//# sourceMappingURL=postalCode.directive.js.map