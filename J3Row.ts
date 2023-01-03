// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { J3Cell } from "./J3Cell";
import { J3Coordinate } from "./J3Coordinate";

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
 * Creates a new `J3Row` object.
 *
 * @param {J3Coordinate} coordinate - The coordinate of the row.
 * @param {readonly J3Cell[]} cells - The cells in the row.
 * @returns {J3Row} A new `J3Row` object.
 */
export function createJ3Row (
    coordinate : J3Coordinate,
    cells      : readonly J3Cell[]
) {
    return {
        coordinate,
        cells
    };
}
