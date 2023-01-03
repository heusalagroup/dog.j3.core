// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { J3CellValueType } from "./J3CellValueType";
import { J3Formula } from "./J3Formula";
import { J3Coordinate } from "./J3Coordinate";

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
 * Creates a new `J3Cell` object.
 *
 * @param {J3Coordinate} coordinate - The coordinate of the cell.
 * @param {J3CellValueType} value - The value of the cell.
 * @param {J3Formula} [formula] - An optional formula for the cell.
 * @returns {J3Cell} A new `J3Cell` object.
 */
export function createJ3Cell (
    coordinate : J3Coordinate,
    value      : J3CellValueType,
    formula   ?: J3Formula
) : J3Cell {
    return {
        coordinate,
        value,
        ...(formula ? {formula} : {})
    };
}
