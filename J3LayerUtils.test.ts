// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { J3LayerUtils } from "./J3LayerUtils";
import { createJ3Layer, J3Layer } from "./J3Layer";
import { createJ3Row } from "./J3Row";
import { createJ3Coordinate } from "./J3Coordinate";
import { createJ3Cell } from "./J3Cell";

describe('J3LayerUtils', () => {

    describe('normalizeCoordinates', () => {
        it('updates the coordinate properties of rows and cells to match the indexes in the array', () => {
            const layer: J3Layer = createJ3Layer(
                createJ3Coordinate(0, 0, 0),
                [
                    createJ3Row(createJ3Coordinate(0, 0, 0), [ createJ3Cell(createJ3Coordinate(0, 0, 0), 1) ]),
                    createJ3Row(createJ3Coordinate(0, 1, 0), [ createJ3Cell(createJ3Coordinate(0, 1, 0), 2) ]),
                    createJ3Row(createJ3Coordinate(0, 2, 0), [ createJ3Cell(createJ3Coordinate(0, 2, 0), 3) ]),
                ]
            );

            const normalizedLayer = J3LayerUtils.normalizeCoordinates(layer);

            expect(normalizedLayer.rows[0].cells[0].coordinate).toStrictEqual(createJ3Coordinate(0, 0, 0));
            expect(normalizedLayer.rows[1].cells[0].coordinate).toStrictEqual(createJ3Coordinate(0, 1, 0));
            expect(normalizedLayer.rows[2].cells[0].coordinate).toStrictEqual(createJ3Coordinate(0, 2, 0));

            expect(normalizedLayer.rows[0].coordinate).toStrictEqual(createJ3Coordinate(0, 0, 0));
            expect(normalizedLayer.rows[1].coordinate).toStrictEqual(createJ3Coordinate(0, 1, 0));
            expect(normalizedLayer.rows[2].coordinate).toStrictEqual(createJ3Coordinate(0, 2, 0));
        });
    });

    describe('moveRowInLayer', () => {

        it('moves a row to the specified index in the layer', () => {

            const layer: J3Layer = {
                coordinate: { x: 0, y: 0, z: 0 },
                rows: [
                    { coordinate: { x: 0, y: 0, z: 0 }, cells: [
                        createJ3Cell(createJ3Coordinate(0, 0 , 0),1)
                    ] },
                    { coordinate: { x: 0, y: 1, z: 0 }, cells: [
                        createJ3Cell(createJ3Coordinate(0, 1 , 0),2)
                    ] },
                    { coordinate: { x: 0, y: 2, z: 0 }, cells: [
                        createJ3Cell(createJ3Coordinate(0, 2 , 0),3)
                    ] },
                ],
            };

            const newLayer = J3LayerUtils.moveRowInLayer(layer, 1, 0);

            expect(newLayer.rows[0].coordinate).toStrictEqual(layer.rows[0].coordinate);
            expect(newLayer.rows[1].coordinate).toStrictEqual(layer.rows[1].coordinate);
            expect(newLayer.rows[2].coordinate).toStrictEqual(layer.rows[2].coordinate);

            expect(newLayer.rows[0].cells[0].coordinate).toStrictEqual(layer.rows[0].cells[0].coordinate);
            expect(newLayer.rows[1].cells[0].coordinate).toStrictEqual(layer.rows[1].cells[0].coordinate);
            expect(newLayer.rows[2].cells[0].coordinate).toStrictEqual(layer.rows[2].cells[0].coordinate);

            expect(newLayer.rows[0].cells[0].value).toStrictEqual(layer.rows[1].cells[0].value);
            expect(newLayer.rows[1].cells[0].value).toStrictEqual(layer.rows[0].cells[0].value);
            expect(newLayer.rows[2].cells[0].value).toStrictEqual(layer.rows[2].cells[0].value);

        });

        it('updates the coordinate of the moved row', () => {
            const layer: J3Layer = {
                coordinate: createJ3Coordinate(0, 0, 0),
                rows: [
                    createJ3Row(createJ3Coordinate(0, 0, 0), [
                        createJ3Cell(createJ3Coordinate(0, 0 , 0),1)
                    ]),
                    createJ3Row(createJ3Coordinate(0, 1, 0), [
                        createJ3Cell(createJ3Coordinate(0, 1 , 0),2)
                    ]),
                    createJ3Row(createJ3Coordinate(0, 2, 0), [
                        createJ3Cell(createJ3Coordinate(0, 2 , 0),3)
                    ])
                ]
            };

            const newLayer = J3LayerUtils.moveRowInLayer(layer, 1, 0);

            expect(newLayer.coordinate).toEqual(createJ3Coordinate(0, 0, 0));
        });

    });

});
