namespace Validation.Configurations.Factories {
    export function mailingAddressValidatableObject(): IValidatableObject {
        return {
            postalCode: {
                us: PostalCode.usPostalCode(),
                ca: PostalCode.canadianPostalCode(),
                ia: PostalCode.iowaPostalCode(PostalCode.usPostalCode())
            },
            city: {
                us: City.usCity()
            }
        }
    }

    streetAddressValidatableObject.$inject = ['mailingAddressValidatableObject'];
    export function streetAddressValidatableObject(mailing: IValidatableObject): IValidatableObject {
        var config = {
            line1: {
                us: Line1.usLine1()
            }
        }

        return angular.merge({}, mailing, config);
    }
}

namespace Validation.Configurations.Line1 {
    export function usLine1(): IValidationConfiguration {
        return {
            maxLength: 40,
            minLength: 1,
            required: true,
            pattern: /^((?!((P(OST)?.?\s*(O(FF(ICE)?)?)?.?\s*(B(IN|OX))?)|B(IN|OX))\s*\d+))/i,
            patternMessage: 'PO Boxes are not allowed for this field'
        }
    }
}

namespace Validation.Configurations.City {
    export function usCity(): IValidationConfiguration {
        return {
            maxLength: 40,
            minLength: 1,
            required: true,
            pattern: /[A-z\D]+/
        }
    }
}

namespace Validation.Configurations.PostalCode {
    export function iowaPostalCode(usPostalCode: IValidationConfiguration): IValidationConfiguration {
        return {
            required: usPostalCode.required,
            maxLength: usPostalCode.maxLength,
            minLength: usPostalCode.minLength,
            pattern: /5[0-2]([0-7][0-9][1-9]|80[0-9])/,
            placeholder: '50001 to 52809'
        }
    }

    export function canadianPostalCode(): IValidationConfiguration {
        return {
            maxLength: 6,
            minLength: 6,
            required: true
        }
    }

    export function usPostalCode(): IValidationConfiguration {
        return {
            maxLength: 9,
            minLength: 5,
            required: true,
            pattern: /\d{5}|\d{9}/,
            placeholder: '00501 to 99950'
        }
    }
}