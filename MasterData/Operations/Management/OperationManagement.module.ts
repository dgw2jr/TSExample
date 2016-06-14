angular.module('masterdata.operationmanagement', ['ngMessages', 'ngMaterial', 'ngRoute'])
    .config(MasterData.OperationManagement.Configuration.Configuration)
    .controller(MasterData.OperationManagement.Controllers)
    .factory(MasterData.OperationManagement.Factories);