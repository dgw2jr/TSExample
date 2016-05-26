var Directives;
(function (Directives) {
    function mailingAddress() {
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
            templateUrl: "culture/address.html"
        };
    }
    Directives.mailingAddress = mailingAddress;
    function streetAddress() {
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
            templateUrl: "culture/address.html"
        };
    }
    Directives.streetAddress = streetAddress;
})(Directives || (Directives = {}));
var Controllers;
(function (Controllers) {
    var MailingAddressController = (function () {
        function MailingAddressController(validatableObject) {
            this.validatableObject = validatableObject;
            this.culture = 'us';
        }
        MailingAddressController.$inject = ['addressValidationConfiguration'];
        return MailingAddressController;
    }());
    Controllers.MailingAddressController = MailingAddressController;
    var StreetAddressController = (function () {
        function StreetAddressController(validatableObject) {
            this.validatableObject = validatableObject;
            this.culture = 'us';
        }
        StreetAddressController.$inject = ['addressValidationConfiguration'];
        return StreetAddressController;
    }());
    Controllers.StreetAddressController = StreetAddressController;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=address.directive.js.map