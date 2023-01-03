// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

/**
 * An object representing a formula in a `J3Cell`.
 */
export interface J3Formula {
    readonly value : string;
}

/**
 * Creates a new `J3Formula` object.
 *
 * @param {string} formula - The string representation of the formula.
 * @returns {J3Formula} A new `J3Formula` object.
 */
export function createJ3Formula (
    formula: string
) {
    return {
        value: formula
    }
}
