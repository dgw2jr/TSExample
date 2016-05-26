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
                        ng-required='vm.config.required'
                        placeholder='{{vm.config.placeholder}}' />`,
            replace: true
        }
    }
}

namespace Controllers {
    export class ValidateController {
        config: Validation.IValidationConfiguration;
    }
}