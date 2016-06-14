module MasterData.OperationManagement.Factories {
    export function operationFactory() {
        var operation = new Dto.Operation();

        var create = (): Dto.IOperation => {
            operation = new Dto.Operation();
            return operation;
        };

        return {
            operation,
            create
        }
    }
}

module MasterData.OperationManagement.Dto {
    export interface IOperation {
        name: string;
        individualPartners: any[];
        businessPartners: any[];
    }

    export class Operation implements IOperation {
        name = '';
        individualPartners = [];
        businessPartners = [];
    }
}