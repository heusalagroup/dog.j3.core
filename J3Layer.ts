// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { isJ3Row, J3Row } from "./J3Row";
import { isJ3Coordinate, J3Coordinate } from "./J3Coordinate";
import { hasNoOtherKeysInDevelopment, isArrayOf, isRegularObject } from "../../../fi/hg/core/modules/lodash";
import { isJ3Cell, J3Cell } from "./J3Cell";

/**
 * Represents a layer in a `J3Grid` object.
 */
export interface J3Layer {

    /**
     * The coordinate of the layer.
     */
    readonly coordinate : J3Coordinate;

    /**
     * The rows in the layer.
     */
    readonly rows       : readonly J3Row[];

}

/**
 * Determines whether the given value is a `J3Layer` object.
 *
 * @param {any} value - The value to check.
 * @returns {value is J3Layer} `true` if the value is a `J3Layer` object, `false` otherwise.
 */
export function isJ3Layer (value : any) : value is J3Layer {
    return (
        isRegularObject(value)
        && hasNoOtherKeysInDevelopment(value, [
            'coordinate',
            'rows'
        ])
        && isJ3Coordinate(value?.coordinate)
        && isArrayOf<J3Row>(value?.rows, isJ3Row)
    );
}

/**
 * Creates a new `J3Layer` object.
 *
 * @param {J3Coordinate} coordinate - The coordinate of the layer.
 * @param {readonly J3Row[]} rows - An array of rows in the layer.
 * @returns {J3Layer} A new `J3Layer` object.
 */
export function createJ3Layer (
    coordinate : J3Coordinate,
    rows : readonly J3Row[]
) {
    if (!isJ3Coordinate(coordinate)) {
        throw new TypeError('`coordinate` must be J3Coordinate');
    }
    if (!isArrayOf<J3Row>(rows, isJ3Row)) {
        throw new TypeError('`rows` be an array of J3Rows');
    }
    return {
        coordinate,
        rows
    };
}
