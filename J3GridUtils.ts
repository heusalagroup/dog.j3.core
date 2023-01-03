// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

/**
 * @module
 * @overview A set of utilities for working with `J3Grid` objects.
 *
 * ```typescript
 * import { J3Cell, createJ3Cell } from './dog/j3/core/J3Cell';
 * import { J3Coordinate, createJ3Coordinate } from './dog/j3/core/J3Coordinate';
 * import { J3Grid, createJ3Grid } from './dog/j3/core/J3Grid';
 * import { J3GridUtils } from './dog/j3/core/J3GridUtils.ts';
 *
 * // Initialize a grid with a single cell at coordinate (0, 0, 0)
 * const grid = createJ3Grid([
 *     {
 *         coordinate: createJ3Coordinate(0, 0, 0),
 *         rows: [
 *             {
 *                 coordinate: createJ3Coordinate(0, 0, 0),
 *                 cells: [createJ3Cell(createJ3Coordinate(0, 0, 0), "Hello")]
 *             }
 *         ]
 *     }
 * ]);
 *
 * // Replace the cell at (0, 0, 0) with a new cell
 * const newCell: J3Cell = createJ3Cell(createJ3Coordinate(0, 0, 0), "World");
 * const updatedGrid: J3Grid = J3GridUtils.replaceCell(grid, createJ3Coordinate(0, 0, 0), newCell);
 *
 * console.log(grid.layers[0].rows[0].cells[0].value); // 'Hello'
 * console.log(updatedGrid.layers[0].rows[0].cells[0].value); // 'World'
 * ```
 */

import { J3Coordinate } from "./J3Coordinate";
import { J3Cell } from "./J3Cell";
import { J3Grid } from "./J3Grid";

/**
 * Class for utility functions for `J3Grid`s.
 */
export class J3GridUtils {

    /**
     * Replaces a cell in a `J3Grid` object with a new cell at a specific coordinate.
     *
     * @param {J3Grid} grid - The `J3Grid` object to modify.
     * @param {J3Coordinate} coordinate - The coordinate at which to replace the cell.
     * @param {J3Cell} newCell - The new cell to place in the grid.
     * @returns {J3Grid} A new `J3Grid` object with the specified cell replaced.
     */
    public static replaceCell (
        grid: J3Grid,
        coordinate: J3Coordinate,
        newCell: J3Cell
    ) : J3Grid {
        const layers = grid.layers.map((layer) => {
            if (layer.coordinate.z !== coordinate.z) {
                return layer;
            }

            const rows = layer.rows.map((row) => {
                if (row.coordinate.y !== coordinate.y) {
                    return row;
                }

                const cells = row.cells.map((cell) => {
                    if (cell.coordinate.x !== coordinate.x) {
                        return cell;
                    }

                    return newCell;
                });

                return { ...row, cells };
            });

            return { ...layer, rows };
        });

        return { ...grid, layers };
    }

}
