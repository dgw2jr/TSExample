var MasterData;
(function (MasterData) {
    var OperationManagement;
    (function (OperationManagement) {
        var Configuration;
        (function (Configuration_1) {
            function Configuration($routeProvider, $mdThemingProvider) {
                $routeProvider
                    .when('/operation/create', {
                    templateUrl: 'MasterData/Operations/Management/Create/Create.html',
                    controller: 'CreateOperationController',
                    controllerAs: 'vm',
                    bindToController: true,
                    resolve: {
                        title: function () { return 'Operation Management > Create'; },
                        operation: ['operationFactory', function (operationFactory) { return operationFactory.create(); }]
                    }
                })
                    .otherwise('/operation/create');
                $mdThemingProvider.theme('default')
                    .primaryPalette('blue');
            }
            Configuration_1.Configuration = Configuration;
        })(Configuration = OperationManagement.Configuration || (OperationManagement.Configuration = {}));
    })(OperationManagement = MasterData.OperationManagement || (MasterData.OperationManagement = {}));
})(MasterData || (MasterData = {}));
var MasterData;
(function (MasterData) {
    var OperationManagement;
    (function (OperationManagement) {
        var Controllers;
        (function (Controllers) {
            var CreateOperationController = (function () {
                function CreateOperationController(title, operation) {
                    this.title = title;
                    this.operation = operation;
                    this.selectedIndex = 0;
                }
                CreateOperationController.$inject = ['title', 'operation'];
                return CreateOperationController;
            }());
            Controllers.CreateOperationController = CreateOperationController;
        })(Controllers = OperationManagement.Controllers || (OperationManagement.Controllers = {}));
    })(OperationManagement = MasterData.OperationManagement || (MasterData.OperationManagement = {}));
})(MasterData || (MasterData = {}));
//# sourceMappingURL=OperationManagement.route.js.map