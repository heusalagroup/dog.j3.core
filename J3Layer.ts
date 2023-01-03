// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { J3Row } from "./J3Row";
import { J3Coordinate } from "./J3Coordinate";

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
    return {
        coordinate,
        rows
    };
}
