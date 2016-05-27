namespace Validation.Configurations.Factories {
    export function mailingAddressValidatableObject(): IValidatableObject {
        return {
            line1: {
              us: {
                  maxLength: 40,
                  minLength: 2,
                  required: true,
                  messages: {
                      maxLength: 'Must be 40 characters or less',
                      minLength: 'Must be at least 2 characters long',
                      required: 'This field is required'
                  }
              }  
            },
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
                us: Line1.usLine1NoPoBox()
            }
        }

        return angular.merge({}, mailing, config);
    }
}

namespace Validation.Configurations.Line1 {
    export function usLine1NoPoBox(): IValidationConfiguration {
        return {
            maxLength: 40,
            minLength: 1,
            required: true,
            pattern: /^((?!((P(OST)?.?\s*(O(FF(ICE)?)?)?.?\s*(B(IN|OX))?)|B(IN|OX))\s*\d+))/i,
            messages: {
                maxLength: 'Must be less than 40 characters',
                minLength: 'Must be at least 1 character',
                required: 'This field is required',
                pattern: 'PO Boxes are not allowed for this field'
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
            pattern: /[A-z\D]+/,
            messages: {
                maxLength: 'Must be less than 40 characters',
                minLength: 'Must be at least 1 character',
                required: 'This field is required',
                pattern: 'Alpha characters only'
            } 
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
            placeholder: '50001 to 52809',
            messages: usPostalCode.messages
        }
    }

    export function canadianPostalCode(): IValidationConfiguration {
        return {
            maxLength: 7,
            minLength: 6,
            required: true,
            pattern: /^(\D{1}\d{1}\D{1}).(\d{1}\D{1}\d{1})?$/,
            formatter: (value) => {
              return value.replace(/^(\D{1}\d{1}\D{1})(\d{1}\D{1}\d{1})?$/, (m, p1, p2) => { return p2 ? `${p1}-${p2}` : p1; })  
            },
            messages: {
                maxLength: 'Must be 7 characters or less',
                minLength: 'Must be at least 6 characters long',
                required: 'This field is required',
                pattern: 'Invalid Canadian postal code format'
            }
        }
    }

    export function usPostalCode(): IValidationConfiguration {
        return {
            maxLength: 10,
            minLength: 5,
            required: true,
            pattern: /\d{5}|\d{9}/,
            placeholder: '00501 to 99950',
            formatter: (value) => {
              return value.replace(/^(\d{5})(\d{4})?$/, (m, p1, p2) => { return p2 ? `${p1}-${p2}` : p1; })  
            },
            messages: {
                maxLength: 'Must be 10 characters or less',
                minLength: 'Must be at least 5 characters long',
                required: 'This field is required',
                pattern: 'Not a valid postal code'
            } 
        }
    }
}