namespace Directives {
    export function validate(): ng.IDirective {
        return {
            restrict: 'E',
            require: 'ngModel',
            controller: 'ValidateController',
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                config: '<'
            },
            template: `<input type='text' 
                        ng-pattern='vm.config.pattern'
                        ng-maxlength='vm.config.maxLength'
                        ng-minlength='vm.config.minLength'
                        ng-required='vm.config.required'
                        placeholder='{{vm.config.placeholder}}' />`,
            replace: true,
            link: (scope: any, elem, attrs, ctrl: ng.INgModelController) => {
                if (!ctrl) {
                    return;
                }

                if (scope.vm.config.formatter instanceof Function) {
                    ctrl.$parsers.unshift((value) => {
                        if(!value) {
                            return;
                        }
                        var formatted = scope.vm.config.formatter(value);
                        ctrl.$setViewValue(formatted);
                        ctrl.$render();
                        return formatted;
                    });
                }
            }
        }
    }
}

namespace Controllers {
    export class ValidateController {
        config: Validation.IValidationConfiguration;
    }
}