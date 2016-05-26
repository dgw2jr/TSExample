module Validation {
    export interface IValidatableObject {
        [property: string]: IValidatablePropertyDictionary;
    }

    export interface IValidatableObjectV2 {
        [culture: string]: IValidatablePropertyDictionary;
    }
}