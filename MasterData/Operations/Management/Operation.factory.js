var MasterData;
(function (MasterData) {
    var OperationManagement;
    (function (OperationManagement) {
        var Factories;
        (function (Factories) {
            function operationFactory() {
                var operation = new OperationManagement.Dto.Operation();
                var create = function () {
                    operation = new OperationManagement.Dto.Operation();
                    return operation;
                };
                return {
                    operation: operation,
                    create: create
                };
            }
            Factories.operationFactory = operationFactory;
        })(Factories = OperationManagement.Factories || (OperationManagement.Factories = {}));
    })(OperationManagement = MasterData.OperationManagement || (MasterData.OperationManagement = {}));
})(MasterData || (MasterData = {}));
var MasterData;
(function (MasterData) {
    var OperationManagement;
    (function (OperationManagement) {
        var Dto;
        (function (Dto) {
            var Operation = (function () {
                function Operation() {
                    this.name = '';
                    this.individualPartners = [];
                    this.businessPartners = [];
                }
                return Operation;
            }());
            Dto.Operation = Operation;
        })(Dto = OperationManagement.Dto || (OperationManagement.Dto = {}));
    })(OperationManagement = MasterData.OperationManagement || (MasterData.OperationManagement = {}));
})(MasterData || (MasterData = {}));
//# sourceMappingURL=Operation.factory.js.map