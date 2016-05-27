namespace Directives {
    export function mailingAddress(): ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            require: 'ngModel',
            controller: 'MailingAddressController',
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                culture: '@',
                ngModel: '='
            },
            templateUrl: `culture/address.html`
        }
    }
    
    export function streetAddress(): ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            require: 'ngModel',
            controller: 'StreetAddressController',
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                culture: '@',
                ngModel: '='
            },
            templateUrl: `culture/address.html`
        }
    }
}

namespace Controllers {
    export interface IAddress {
        line1: string;
        line2: string;
        city: string;
        postalCode: string;
    }

    export class MailingAddressController {
        static $inject = ['mailingAddressValidatableObject'];
        constructor(private validatableObject: Validation.IValidatableObject) { }

        culture = 'us';
        ngModel: IAddress;
    }

    export class StreetAddressController {
        static $inject = ['streetAddressValidatableObject'];
        constructor(private validatableObject: Validation.IValidatableObject) { }

        culture = 'us';
        ngModel: IAddress;
    }
}