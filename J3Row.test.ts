// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJ3Row, J3Row } from "./J3Row";
import { createJ3Coordinate, J3Coordinate } from "./J3Coordinate";
import { J3Cell } from "./J3Cell";

describe('J3Row', () => {

    describe('createJ3Row', () => {

        it('can create empty row', () => {
            expect( () => createJ3Row(
                createJ3Coordinate(0, 0 , 0),
                [])
            ).not.toThrow();
        });

        it('creates a row with the specified coordinate and cells', () => {
            const coordinate = createJ3Coordinate(0, 0, 0);
            const cells: readonly J3Cell[] = [];
            const row = createJ3Row(coordinate, cells);
            expect(row).toEqual(
                {
                                    coordinate,
                                    cells
                                }
            );
        });

        it('creates a row with the correct coordinate and cells', () => {
            const coordinate = createJ3Coordinate(5, 3, 1);
            const cells: readonly J3Cell[] = [{coordinate: createJ3Coordinate(0, 0, 0), value: 'foo'}, {coordinate: createJ3Coordinate(1, 0, 0), value: 123}];
            const row = createJ3Row(coordinate, cells);
            expect(row).toEqual(
                {
                    coordinate,
                    cells
                }
            );
        });

        it('throws an error if coordinate is not a valid J3Coordinate', () => {
            const coordinate = {x: 0, y: 0, z: 0};
            const cells: readonly J3Cell[] = [];
            expect(() => createJ3Row(coordinate as J3Coordinate, cells)).toThrowError();
        });

        it('throws an error if cells is not an array of J3Cells', () => {
            const coordinate = createJ3Coordinate(0, 0, 0);
            const cells: any[] = [{coordinate: createJ3Coordinate(0, 0, 0), value: 'foo'}, {coordinate: createJ3Coordinate(1, 0, 0), value: 123}];
            expect(() => createJ3Row(coordinate, cells as readonly J3Cell[])).toThrowError();
        });

    });

});
