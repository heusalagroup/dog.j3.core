// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJ3Grid, J3Grid } from "./J3Grid";
import { createJ3Layer } from "./J3Layer";
import { createJ3Row } from "./J3Row";
import { createJ3Cell } from "./J3Cell";
import { createJ3Coordinate } from "./J3Coordinate";

describe('J3Grid', () => {

    describe('createJ3Grid', () => {

        it('can create empty grid', () => {
            expect( () => createJ3Grid([]) ).not.toThrow();
        })

        it('can create 2x2x2 grid', () => {
            const grid = createJ3Grid(
                [
                    createJ3Layer(
                        createJ3Coordinate(0, 0 , 0),
                        [
                            createJ3Row(
                                createJ3Coordinate(0, 0 , 0),
                                [
                                    createJ3Cell(createJ3Coordinate(0, 0 , 0),1),
                                    createJ3Cell(createJ3Coordinate(1, 0 , 0),2)
                                ]
                            ),
                            createJ3Row(
                                createJ3Coordinate(0, 1 , 0),
                                [
                                    createJ3Cell(createJ3Coordinate(0, 1 , 0),3),
                                    createJ3Cell(createJ3Coordinate(1, 1 , 0),4)
                                ]
                            )
                        ]
                    ),
                    createJ3Layer(
                        createJ3Coordinate(0, 0 , 1),
                        [
                            createJ3Row(
                                createJ3Coordinate(0, 0 , 1),
                                [
                                    createJ3Cell(createJ3Coordinate(0, 0 , 1),5),
                                    createJ3Cell(createJ3Coordinate(1, 0 , 1),6)
                                ]
                            ),
                            createJ3Row(
                                createJ3Coordinate(0, 1 , 1),
                                [
                                    createJ3Cell(createJ3Coordinate(0, 1 , 1),7),
                                    createJ3Cell(createJ3Coordinate(1, 1 , 1),8)
                                ]
                            )
                        ]
                    )
               ]
            );

            expect(grid.layers[0].rows[0].cells[0].value).toStrictEqual(1);
            expect(grid.layers[0].rows[0].cells[1].value).toStrictEqual(2);
            expect(grid.layers[0].rows[1].cells[0].value).toStrictEqual(3);
            expect(grid.layers[0].rows[1].cells[1].value).toStrictEqual(4);
            expect(grid.layers[1].rows[0].cells[0].value).toStrictEqual(5);
            expect(grid.layers[1].rows[0].cells[1].value).toStrictEqual(6);
            expect(grid.layers[1].rows[1].cells[0].value).toStrictEqual(7);
            expect(grid.layers[1].rows[1].cells[1].value).toStrictEqual(8);

        })

    });

});
