module MasterData.OperationManagement.Configuration {
    export function Configuration($routeProvider, $mdThemingProvider) {
        $routeProvider
            .when('/operation/create',
            {
                templateUrl: 'MasterData/Operations/Management/Create/Create.html',
                controller: 'CreateOperationController',
                controllerAs: 'vm',
                bindToController: true,
                resolve: {
                    title: () => 'Operation Management > Create',
                    operation: ['operationFactory', (operationFactory) => operationFactory.create()]
                }
            })
            .otherwise('/operation/create');

        $mdThemingProvider.theme('default')
            .primaryPalette('blue');
    }
}

module MasterData.OperationManagement.Controllers {
    export class CreateOperationController {
        static $inject = ['title', 'operation'];
        constructor(private title, private operation) { }

        selectedIndex = 0;
    }
}