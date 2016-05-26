module Validation {
    export interface IValidatableObject {
        [property: string]: IValidatableProperty;
    }
}