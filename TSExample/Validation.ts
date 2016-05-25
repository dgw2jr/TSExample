interface IAddress {
    addressLine1: string;
    addressLine2: string;
    city: string;
}

interface IRules {
    [propertyName: string]: Function[];
}


interface IModelValidator<T> {
    isValid(model: T, rules: IRules);
}

interface IPersonModel {
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

var model = {
    firstName: '',
    lastName: 'LongLastName',
    phoneNumber: '1231231233'
};

class Validator<T> implements IModelValidator<T> {
    isValid(model: T, rules: IRules) {
        var returnValue = true;

        for (var prop in model) {
            if (!model.hasOwnProperty(prop)) {
                continue;
            }

            for (var fn in rules[prop]) {
                if (!rules[prop].hasOwnProperty(fn)) {
                    continue;
                }

                var result = rules[prop][fn](model[prop]);

                console.log(prop + ': ' + result + '\r\n');

                if (result === false) {
                    returnValue = result;
                    break;
                }
            }

            if (returnValue === false) {
                break;
            }
        }

        return returnValue;
    }
}

class PersonModelController {
    constructor(private validator: IModelValidator<IPersonModel>) { }

    private minLength = (str) => {
        if (!str) {
            return true;
        }

        return str.length >= 5;
    }

    private maxLength = (str) => {
        return str.length < 10;
    }

    private isPhone = (phone) => {
        return /^\d{3}\d{3}\d{4}$/.test(phone);
    }

    private required = (input) => {
        return !!input;
    }

    private rules: IRules = {
        firstName: [this.required, this.minLength],
        lastName: [this.minLength, this.maxLength],
        phoneNumber: [this.isPhone]
    };

    isValid = (model: IPersonModel) => {
        return this.validator.isValid(model, this.rules);
    };
}

