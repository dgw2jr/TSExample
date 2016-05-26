module Controllers {
    export class TestController {
        static $inject = ['$scope'];
        constructor($scope) {
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
                street: {

                }
            };

            $scope.culture = $scope.cultures[0];
        }
    }
}