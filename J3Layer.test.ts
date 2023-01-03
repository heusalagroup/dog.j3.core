// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJ3Layer, J3Layer } from "./J3Layer";
import { createJ3Coordinate } from "./J3Coordinate";
import { createJ3Row, J3Row } from "./J3Row";
import { createJ3Cell, J3Cell } from "./J3Cell";

describe('J3Layer', () => {

    describe('createJ3Layer', () => {

        it('can create empty layer', () => {
            expect(() => createJ3Layer(
                createJ3Coordinate(0, 0, 0),
                []
            )).not.toThrow();
        });

        it('creates a layer with no rows when provided with empty rows array', () => {
            const coordinate = createJ3Coordinate(0, 0, 0);
            const rows: J3Row[] = [];
            const layer = createJ3Layer(coordinate, rows);

            expect(layer).toEqual(
                {
                    coordinate,
                    rows
                }
            );
        });

        it("creates an empty layer with the specified coordinate", () => {
            const coordinate = createJ3Coordinate(0, 0, 0);
            const rows: readonly J3Row[] = [];
            const layer = createJ3Layer(coordinate, rows);
            expect(layer).toEqual({
                                      coordinate,
                                      rows,
                                  });
        });

        it("creates a layer with the specified coordinate and rows", () => {
            const coordinate = createJ3Coordinate(0, 0, 0);
            const cells1: readonly J3Cell[] = [createJ3Cell(createJ3Coordinate(0, 0, 0), "test1")];
            const cells2: readonly J3Cell[] = [createJ3Cell(createJ3Coordinate(0, 0, 0), "test2")];
            const rows: readonly J3Row[] = [createJ3Row(createJ3Coordinate(0, 0, 0), cells1), createJ3Row(createJ3Coordinate(0, 1, 0), cells2)];
            const layer = createJ3Layer(coordinate, rows);
            expect(layer).toEqual({
                                      coordinate,
                                      rows,
                                  });
        });

    });

});
