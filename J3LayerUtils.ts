// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

/**
 * @module
 * @overview A set of utilities for working with `J3Layer` objects.
 *
 * ```typescript
 * import { moveRowInJ3Layer } from './moveRowInJ3Layer';
 *
 * const originalLayer = {
 *   coordinate: { x: 0, y: 0, z: 0 },
 *   rows: [
 *     {
 *       coordinate: { x: 0, y: 0, z: 0 },
 *       cells: [],
 *     },
 *     {
 *       coordinate: { x: 0, y: 1, z: 0 },
 *       cells: [],
 *     },
 *     {
 *       coordinate: { x: 0, y: 2, z: 0 },
 *       cells: [],
 *     },
 *   ],
 * };
 *
 * const modifiedLayer = moveRowInJ3Layer(originalLayer, 1, 2);
 *
 * console.log(modifiedLayer);
 * // Output:
 * // {
 * //   coordinate: { x: 0, y: 0, z: 0 },
 * //   rows: [
 * //     {
 * //       coordinate: { x: 0, y: 0, z: 0 },
 * //       cells: [],
 * //     },
 * //     {
 * //       coordinate: { x: 0, y: 2, z: 0 },
 * //       cells: [],
 * //     },
 * //     {
 * //       coordinate: { x: 0, y: 1, z: 0 },
 * //       cells: [],
 * //     },
 * //   ],
 * // }
 * ```
 */

import { J3Layer } from "./J3Layer";
import { createJ3Coordinate } from "./J3Coordinate";

/**
 * Class for utility functions for `J3Layer`s.
 */
export class J3LayerUtils {

    /**
     * Updates the `coordinate` properties of the `rows` and `cells` in the
     * `J3Layer` to match the indexes in the array.
     *
     * @param {J3Layer} layer - The `J3Layer` to update the coordinates for.
     * @returns {J3Layer} A new `J3Layer` object with updated `coordinate` properties.
     */
    public static normalizeCoordinates (layer: J3Layer) : J3Layer {
        return {
            ...layer,
            rows: layer.rows.map((row, rowIndex) => ({
                ...row,
                cells: row.cells.map((cell, cellIndex) => ({
                    ...cell,
                    coordinate: createJ3Coordinate(cellIndex, rowIndex, cell.coordinate.z),
                })),
                coordinate: createJ3Coordinate(row.coordinate.x, rowIndex, row.coordinate.z),
            })),
        };
    }

    /**
     * Moves a row in a layer to a new index.
     *
     * @param layer - The layer to move the row in.
     * @param fromIndex - The index of the row to move.
     * @param toIndex - The index to move the row to.
     * @returns A new layer with the row moved to the new index.
     */
    public static moveRowInLayer (
        layer: J3Layer,
        fromIndex: number,
        toIndex: number
    ): J3Layer {

        // Create a new array of rows with the row moved to the new index.
        const rows = layer.rows.slice();
        const [rowToMove] = rows.splice(fromIndex, 1);
        rows.splice(toIndex, 0, rowToMove);

        // Create a new layer object with the updated rows array.
        const updatedLayer = {
            ...layer,
            rows
        };

        // Normalize the coordinates in the updated layer.
        return J3LayerUtils.normalizeCoordinates(updatedLayer);

    }

}
