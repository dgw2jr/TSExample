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
            replace: true
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
})(Controllers || (Controllers = {}));
//# sourceMappingURL=validate.directive.js.map