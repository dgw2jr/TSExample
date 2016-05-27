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
})(Controllers || (Controllers = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGRyZXNzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLFVBQVUsQ0FnQ25CO0FBaENELFdBQVUsVUFBVSxFQUFDLENBQUM7SUFDbEI7UUFDSSxNQUFNLENBQUM7WUFDSCxRQUFRLEVBQUUsR0FBRztZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLFNBQVM7WUFDbEIsVUFBVSxFQUFFLDBCQUEwQjtZQUN0QyxZQUFZLEVBQUUsSUFBSTtZQUNsQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLEtBQUssRUFBRTtnQkFDSCxPQUFPLEVBQUUsR0FBRztnQkFDWixPQUFPLEVBQUUsR0FBRzthQUNmO1lBQ0QsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFBO0lBQ0wsQ0FBQztJQWRlLHlCQUFjLGlCQWM3QixDQUFBO0lBRUQ7UUFDSSxNQUFNLENBQUM7WUFDSCxRQUFRLEVBQUUsR0FBRztZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLFNBQVM7WUFDbEIsVUFBVSxFQUFFLHlCQUF5QjtZQUNyQyxZQUFZLEVBQUUsSUFBSTtZQUNsQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLEtBQUssRUFBRTtnQkFDSCxPQUFPLEVBQUUsR0FBRztnQkFDWixPQUFPLEVBQUUsR0FBRzthQUNmO1lBQ0QsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFBO0lBQ0wsQ0FBQztJQWRlLHdCQUFhLGdCQWM1QixDQUFBO0FBQ0wsQ0FBQyxFQWhDUyxVQUFVLEtBQVYsVUFBVSxRQWdDbkI7QUFFRCxJQUFVLFdBQVcsQ0F1QnBCO0FBdkJELFdBQVUsV0FBVyxFQUFDLENBQUM7SUFRbkI7UUFFSSxrQ0FBb0IsaUJBQWdEO1lBQWhELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBK0I7WUFFcEUsWUFBTyxHQUFHLElBQUksQ0FBQztRQUZ5RCxDQUFDO1FBRGxFLGdDQUFPLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBS3pELCtCQUFDO0lBQUQsQ0FBQyxBQU5ELElBTUM7SUFOWSxvQ0FBd0IsMkJBTXBDLENBQUE7SUFFRDtRQUVJLGlDQUFvQixpQkFBZ0Q7WUFBaEQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUErQjtZQUVwRSxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRnlELENBQUM7UUFEbEUsK0JBQU8sR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFLeEQsOEJBQUM7SUFBRCxDQUFDLEFBTkQsSUFNQztJQU5ZLG1DQUF1QiwwQkFNbkMsQ0FBQTtBQUNMLENBQUMsRUF2QlMsV0FBVyxLQUFYLFdBQVcsUUF1QnBCIn0=