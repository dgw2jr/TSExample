module Validation {
    export interface IValidationConfiguration {
        maxLength: number;
        minLength: number;
        required: boolean;
        pattern?: RegExp;
        patternDisplay?: string;
    }
}