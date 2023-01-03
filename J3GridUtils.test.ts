// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { J3GridUtils } from "./J3GridUtils";
import { J3Grid } from "./J3Grid";
import { J3Cell } from "./J3Cell";

describe('J3GridUtils', () => {

    describe('replaceCell', () => {

        it('should replace the cell at the specified coordinate in the grid', () => {
            const grid = {
                layers: [ {
                    coordinate: {x: 0, y: 0, z: 0},
                    rows: [ {
                        coordinate: {x: 0, y: 0, z: 0},
                        cells: [ {
                            coordinate: {x: 0, y: 0, z: 0},
                            value: 'old value'
                        } ]
                    } ]
                } ]
            };
            const newCell = {
                coordinate: {x: 0, y: 0, z: 0},
                value: 'new value'
            };
            const newGrid = J3GridUtils.replaceCell(grid, {x: 0, y: 0, z: 0}, newCell);
            expect(newGrid).toEqual(
                {
                    layers: [ {
                        coordinate: {x: 0, y: 0, z: 0},
                        rows: [ {
                            coordinate: {x: 0, y: 0, z: 0},
                            cells: [ {
                                coordinate: {x: 0, y: 0, z: 0},
                                value: 'new value'
                            } ]
                        } ]
                    } ]
                }
            );
        });

        it('should replace a cells in a 2x2x2 grid', () => {

            const inputGrid: J3Grid = {
                layers: [
                    {
                        coordinate: { x: 0, y: 0, z: 0 },
                        rows: [
                            {
                                coordinate: { x: 0, y: 0, z: 0 },
                                cells: [
                                    {
                                        coordinate: { x: 0, y: 0, z: 0 },
                                        value: "foo",
                                    },
                                    {
                                        coordinate: { x: 1, y: 0, z: 0 },
                                        value: "bar",
                                    },
                                ],
                            },
                            {
                                coordinate: { x: 0, y: 1, z: 0 },
                                cells: [
                                    {
                                        coordinate: { x: 0, y: 1, z: 0 },
                                        value: "baz",
                                    },
                                    {
                                        coordinate: { x: 1, y: 1, z: 0 },
                                        value: "qux",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            };

            const inputCell: J3Cell = {
                coordinate: { x: 1, y: 0, z: 0 },
                value: "new value",
            };

            const expectedOutput: J3Grid = {
                layers: [
                    {
                        coordinate: { x: 0, y: 0, z: 0 },
                        rows: [
                            {
                                coordinate: { x: 0, y: 0, z: 0 },
                                cells: [
                                    {
                                        coordinate: { x: 0, y: 0, z: 0 },
                                        value: "foo",
                                    },
                                    {
                                        coordinate: { x: 1, y: 0, z: 0 },
                                        value: "new value",
                                    },
                                ],
                            },
                            {
                                coordinate: { x: 0, y: 1, z: 0 },
                                cells: [
                                    {
                                        coordinate: { x: 0, y: 1, z: 0 },
                                        value: "baz",
                                    },
                                    {
                                        coordinate: { x: 1, y: 1, z: 0 },
                                        value: "qux",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            };

            expect(J3GridUtils.replaceCell(inputGrid, inputCell.coordinate, inputCell) ).toEqual(expectedOutput);

        });

    });

});
