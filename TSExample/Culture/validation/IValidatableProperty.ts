module Validation {
    export interface IValidatableProperty {
        [name: string]: IValidationConfiguration;
    }
}