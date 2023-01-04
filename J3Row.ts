// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { isJ3Cell, J3Cell } from "./J3Cell";
import { isJ3Coordinate, J3Coordinate } from "./J3Coordinate";
import { hasNoOtherKeysInDevelopment, isArrayOf, isRegularObject } from "../../../fi/hg/core/modules/lodash";

/**
 * A horizontal slice of cells in a `J3Grid`.
 */
export interface J3Row {
    /**
     * The coordinate of the row in the `J3Grid`.
     */
    readonly coordinate : J3Coordinate;
    /**
     * The cells in the row.
     */
    readonly cells : readonly J3Cell[];
}

/**
 * Determines whether the provided value is a `J3Row` object.
 *
 * A `J3Row` object is considered valid if it is an object that has no
 * additional properties besides `coordinate` and `cells`, and if `coordinate`
 * is a valid `J3Coordinate` object and `cells` is an array of valid `J3Cell`
 * objects.
 *
 * @param {any} value - The value to be checked.
 * @returns {value is J3Row} `true` if the provided value is a valid `J3Row`
 *          object, `false` otherwise.
 */
export function isJ3Row (value : any) : value is J3Row {
    return (
        isRegularObject(value)
        && hasNoOtherKeysInDevelopment(value, [
            'coordinate',
            'cells'
        ])
        && isJ3Coordinate(value?.coordinate)
        && isArrayOf<J3Cell>(value?.cells, isJ3Cell)
    );
}

/**
 * Creates a new `J3Row` object.
 *
 * @param {J3Coordinate} coordinate - The coordinate of the row.
 * @param {readonly J3Cell[]} cells - The cells in the row.
 * @throws {TypeError} If `coordinate` is not a `J3Coordinate` object.
 * @throws {TypeError} If `cells` is not an array of `J3Cell` objects.
 * @returns {J3Row} A new `J3Row` object.
 */
export function createJ3Row (
    coordinate : J3Coordinate,
    cells      : readonly J3Cell[]
) {
    if (!isJ3Coordinate(coordinate)) {
        throw new TypeError('`coordinate` must be J3Coordinate');
    }
    if (!isArrayOf<J3Cell>(cells, isJ3Cell)) {
        throw new TypeError('`cells` be an array of J3Cells');
    }
    return {
        coordinate,
        cells
    };
}
