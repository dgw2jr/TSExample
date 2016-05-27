module Validation {
    export interface IValidationConfiguration {
        maxLength: number;
        minLength: number;
        required: boolean;
        pattern?: RegExp;
        patternMessage?: string;
        placeholder?: string;
        formatter?: (value) => void;
        messages?: IValidationMessages;
    }
    
    export interface IValidationMessages {
        maxLength?: string;
        minLength?: string;
        required?: string;
        pattern?: string;
    }
}