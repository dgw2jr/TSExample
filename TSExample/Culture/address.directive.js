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
        MailingAddressController.$inject = ['mailingAddressValidatableObject'];
        return MailingAddressController;
    }());
    Controllers.MailingAddressController = MailingAddressController;
    var StreetAddressController = (function () {
        function StreetAddressController(validatableObject) {
            this.validatableObject = validatableObject;
            this.culture = 'us';
        }
        StreetAddressController.$inject = ['streetAddressValidatableObject'];
        return StreetAddressController;
    }());
    Controllers.StreetAddressController = StreetAddressController;
    var AddressController = (function () {
        function AddressController(validatableObject) {
            this.validatableObject = validatableObject;
            this.culture = 'us';
        }
        return AddressController;
    }());
    Controllers.AddressController = AddressController;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=address.directive.js.map