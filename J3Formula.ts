// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { hasNoOtherKeysInDevelopment, isRegularObject, isString, isUndefined } from "../../../fi/hg/core/modules/lodash";

/**
 * An object representing a formula in a `J3Cell`.
 */
export interface J3Formula {
    readonly value : string;
}

/**
 * Determines if the provided value is a `J3Formula` object.
 *
 * @param {any} value - The value to test.
 * @returns {value is J3Formula} `true` if the provided value is a `J3Formula` object, `false` otherwise.
 */
export function isJ3Formula (value : any) : value is J3Formula {
    return (
        isRegularObject(value)
        && hasNoOtherKeysInDevelopment(value, [
            'value'
        ])
        && isString(value?.value)
    );
}

/**
 * Determines whether the provided value is a `J3Formula` object or `undefined`.
 *
 * @param value - The value to test.
 * @returns `true` if the value is a `J3Formula` object or `undefined`, `false` otherwise.
 */
export function isJ3FormulaOrUndefined (value : any) : value is J3Formula|undefined {
    return isJ3Formula(value) || isUndefined(value);
}

/**
 * Creates a new `J3Formula` object.
 *
 * @param {string} formula - The string representation of the formula.
 * @returns {J3Formula} A new `J3Formula` object.
 * @throws {TypeError} If `formula` is not string.
 */
export function createJ3Formula (
    formula: string
) {
    if (formula === undefined) {
        throw new TypeError('Formula must have a value');
    }
    if (!isString(formula)) {
        throw new TypeError('Formula value must be a string');
    }
    return {
        value: formula
    }
}
