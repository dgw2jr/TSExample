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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXN0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLFdBQVcsQ0F5QmpCO0FBekJELFdBQU8sV0FBVyxFQUFDLENBQUM7SUFDaEI7UUFFSSx3QkFBWSxNQUFNO1lBQ2QsTUFBTSxDQUFDLFFBQVEsR0FBRztnQkFDZCxJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTthQUNQLENBQUM7WUFFRixNQUFNLENBQUMsU0FBUyxHQUFHO2dCQUNmLE9BQU8sRUFBRTtvQkFDTCxLQUFLLEVBQUUsRUFBRTtvQkFDVCxLQUFLLEVBQUUsRUFBRTtvQkFDVCxJQUFJLEVBQUUsRUFBRTtvQkFDUixVQUFVLEVBQUUsT0FBTztpQkFDdEI7Z0JBQ0QsTUFBTSxFQUFFLEVBRVA7YUFDSixDQUFDO1lBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFyQk0sc0JBQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBc0JoQyxxQkFBQztJQUFELENBQUMsQUF2QkQsSUF1QkM7SUF2QlksMEJBQWMsaUJBdUIxQixDQUFBO0FBQ0wsQ0FBQyxFQXpCTSxXQUFXLEtBQVgsV0FBVyxRQXlCakIifQ==