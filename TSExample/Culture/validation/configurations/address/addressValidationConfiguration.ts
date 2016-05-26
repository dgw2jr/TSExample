namespace Validation.Configurations.Factories {
    export function addressValidationConfiguration(): IValidatableObject {
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
            patternDisplay: '50001 to 52809'
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
            patternDisplay: '00501 to 99950'
        }
    }
}