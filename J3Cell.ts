// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { isJ3CellValueType, J3CellValueType } from "./J3CellValueType";
import { isJ3Formula, isJ3FormulaOrUndefined, J3Formula } from "./J3Formula";
import { isJ3Coordinate, J3Coordinate } from "./J3Coordinate";
import { hasNoOtherKeysInDevelopment, isRegularObject } from "../../../fi/hg/core/modules/lodash";

/**
 * A cell in a `J3Grid`.
 */
export interface J3Cell {
    /**
     * The coordinate of the cell.
     */
    readonly coordinate : J3Coordinate;
    /**
     * The value of the cell. Can be a string, number, or boolean.
     */
    readonly value      : J3CellValueType;
    /**
     * An optional formula for the cell.
     */
    readonly formula   ?: J3Formula;
}

/**
 * Determines if the given value is a `J3Cell`.
 *
 * @param {any} value - The value to test.
 * @returns {value is J3Cell} `true` if the value is a `J3Cell` object, `false` otherwise.
 */
export function isJ3Cell (value : any) : value is J3Cell {
    return (
        isRegularObject(value)
        && hasNoOtherKeysInDevelopment(value, [
            'coordinate',
            'value',
            'formula'
        ])
        && isJ3Coordinate(value?.coordinate)
        && isJ3CellValueType(value?.value)
        && isJ3FormulaOrUndefined(value?.formula)
    );
}

/**
 * Creates a new `J3Cell` object.
 *
 * @param {J3Coordinate} coordinate - The coordinate of the cell.
 * @param {J3CellValueType} value - The value of the cell.
 * @param {J3Formula|undefined} [formula] - The formula of the cell.
 * @returns {J3Cell} A new `J3Cell` object.
 * @throws {TypeError} If `coordinate` is not a valid `J3Coordinate`, `value` is not a valid `J3CellValueType`, or `formula` is not a valid `J3Formula` or not provided.
 */
export function createJ3Cell (
    coordinate : J3Coordinate,
    value      : J3CellValueType,
    formula   ?: J3Formula
) : J3Cell {
    if (!isJ3Coordinate(coordinate)) {
        throw new TypeError('`coordinate` must be J3Coordinate');
    }
    if (!isJ3CellValueType(value)) {
        throw new TypeError('`value` must be J3CellValueType');
    }
    if (!isJ3FormulaOrUndefined(formula)) {
        throw new TypeError('`formula` must be J3Formula or not provided');
    }
    return {
        coordinate,
        value,
        ...(formula ? {formula} : {})
    };
}
