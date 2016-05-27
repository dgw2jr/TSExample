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
            template: "<input type='text' \n                        ng-pattern='vm.config.pattern'\n                        ng-maxlength='vm.config.maxLength'\n                        ng-minlength='vm.config.minLength'\n                        ng-required='vm.config.required'\n                        placeholder='{{vm.config.placeholder}}' />",
            replace: true,
            link: function (scope, elem, attrs, ctrl) {
                if (!ctrl) {
                    return;
                }
                if (scope.vm.config.formatter instanceof Function) {
                    ctrl.$parsers.unshift(function (value) {
                        if (!value) {
                            return;
                        }
                        var formatted = scope.vm.config.formatter(value);
                        ctrl.$setViewValue(formatted);
                        ctrl.$render();
                        return formatted;
                    });
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
})(Controllers || (Controllers = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsVUFBVSxDQXFDbkI7QUFyQ0QsV0FBVSxVQUFVLEVBQUMsQ0FBQztJQUNsQjtRQUNJLE1BQU0sQ0FBQztZQUNILFFBQVEsRUFBRSxHQUFHO1lBQ2IsT0FBTyxFQUFFLFNBQVM7WUFDbEIsVUFBVSxFQUFFLG9CQUFvQjtZQUNoQyxZQUFZLEVBQUUsSUFBSTtZQUNsQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLEtBQUssRUFBRTtnQkFDSCxNQUFNLEVBQUUsR0FBRzthQUNkO1lBQ0QsUUFBUSxFQUFFLG1VQUs2QztZQUN2RCxPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxVQUFDLEtBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQTJCO2dCQUN2RCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ1IsTUFBTSxDQUFDO2dCQUNYLENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxZQUFZLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSzt3QkFDeEIsRUFBRSxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNSLE1BQU0sQ0FBQzt3QkFDWCxDQUFDO3dCQUNELElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUNmLE1BQU0sQ0FBQyxTQUFTLENBQUM7b0JBQ3JCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDO1NBQ0osQ0FBQTtJQUNMLENBQUM7SUFuQ2UsbUJBQVEsV0FtQ3ZCLENBQUE7QUFDTCxDQUFDLEVBckNTLFVBQVUsS0FBVixVQUFVLFFBcUNuQjtBQUVELElBQVUsV0FBVyxDQUlwQjtBQUpELFdBQVUsV0FBVyxFQUFDLENBQUM7SUFDbkI7UUFBQTtRQUVBLENBQUM7UUFBRCx5QkFBQztJQUFELENBQUMsQUFGRCxJQUVDO0lBRlksOEJBQWtCLHFCQUU5QixDQUFBO0FBQ0wsQ0FBQyxFQUpTLFdBQVcsS0FBWCxXQUFXLFFBSXBCIn0=