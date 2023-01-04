// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { hasNoOtherKeysInDevelopment, isNumber, isRegularObject } from "../../../fi/hg/core/modules/lodash";

/**
 * Coordinate object representing a cell's position within a `J3Grid`.
 *
 * @property {number} x - The x-coordinate of the cell.
 * @property {number} y - The y-coordinate of the cell.
 * @property {number} z - The z-coordinate of the cell.
 */
export interface J3Coordinate {
    readonly x : number;
    readonly y : number;
    readonly z : number;
}

/**
 * Determines whether the provided value is a `J3Coordinate` object.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} `true` if the value is a `J3Coordinate` object, `false` otherwise.
 */
export function isJ3Coordinate (value : any) : value is J3Coordinate {
    return (
        isRegularObject(value)
        && hasNoOtherKeysInDevelopment(value, [
            'x',
            'y',
            'z'
        ])
        && isNumber(value?.x)
        && isNumber(value?.y)
        && isNumber(value?.z)
    );
}

/**
 * Creates a new `J3Coordinate` object.
 *
 * @param {number} x - The `x` coordinate.
 * @param {number} y - The `y` coordinate.
 * @param {number} z - The `z` coordinate.
 * @returns {J3Coordinate} A new `J3Coordinate` object with the specified coordinates.
 * @throws {TypeError} If `x`, `y`, or `z` are not numbers.
 */
export function createJ3Coordinate (
    x : number,
    y : number,
    z : number
) : J3Coordinate {
    if (!( isNumber(x) && isNumber(y) && isNumber(z) )) {
        throw new TypeError('`x`, `y`, and `z` must be numbers');
    }
    return {
        x,
        y,
        z
    }
}
