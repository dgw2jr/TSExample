var Controllers;
(function (Controllers) {
    var TestController = (function () {
        function TestController($scope) {
            $scope.cultures = [
                'us',
                'ca',
                'ia'
            ];
            $scope.addresses = {
                mailing: {
                    line1: '',
                    line2: '',
                    city: '',
                    postalCode: '12345'
                },
                street: {}
            };
            $scope.culture = $scope.cultures[0];
        }
        TestController.$inject = ['$scope'];
        return TestController;
    }());
    Controllers.TestController = TestController;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=TestController.js.map