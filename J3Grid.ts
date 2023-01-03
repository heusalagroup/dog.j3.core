// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { J3Layer } from "./J3Layer";

/**
 * Represents a three-dimensional grid of cells.
 *
 * @interface
 */
export interface J3Grid {
    /**
     * The layers in the grid.
     *
     * @type {readonly J3Layer[]}
     */
    readonly layers : readonly J3Layer[];
}

/**
 * Creates a new `J3Grid` object with the specified layers.
 *
 * @param {readonly J3Layer[]} layers - The layers to include in the new grid.
 * @returns {J3Grid} A new `J3Grid` object with the specified layers.
 */
export function createJ3Grid (
    layers: readonly J3Layer[]
) {
    return {
        layers
    }
}
