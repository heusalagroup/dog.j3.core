// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

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
 * Creates a new `J3Coordinate` object.
 *
 * @param {number} x - The `x` coordinate.
 * @param {number} y - The `y` coordinate.
 * @param {number} z - The `z` coordinate.
 * @returns {J3Coordinate} A new `J3Coordinate` object with the specified coordinates.
 */
export function createJ3Coordinate (
    x : number,
    y : number,
    z : number
) : J3Coordinate {
    return {
        x,
        y,
        z
    }
}
