// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJ3Row, isJ3Row, J3Row } from "./J3Row";
import { createJ3Coordinate, J3Coordinate } from "./J3Coordinate";
import { J3Cell } from "./J3Cell";

describe('J3Row', () => {

    describe('isJ3Row', () => {

        it('returns true for a valid J3Row object', () => {
            expect(isJ3Row({
                               coordinate: { x: 1, y: 2, z: 3 },
                               cells: [
                                   {
                                       coordinate: { x: 1, y: 2, z: 3 },
                                       value: 'hello'
                                   }
                               ]
                           })).toBe(true);
        });

        it('returns false for a non-object value', () => {
            expect(isJ3Row('not an object')).toBe(false);
        });

        it('returns false for an object with an invalid "coordinate" property', () => {
            expect(isJ3Row({
                               // @ts-ignore
                               coordinate: 'not a coordinate',
                               cells: [
                                   {
                                       coordinate: { x: 1, y: 2, z: 3 },
                                       value: 'hello'
                                   }
                               ]
                           })).toBe(false);
        });

        it('returns false for an object with an invalid "cells" property', () => {
            expect(isJ3Row({
                               coordinate: { x: 1, y: 2, z: 3 },
                               // @ts-ignore
                               cells: 'not an array of cells'
                           })).toBe(false);
        });
    });

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
            const coordinate = {x: 0, y: 0};
            const cells: readonly J3Cell[] = [];
            expect(() => createJ3Row(coordinate as J3Coordinate, cells)).toThrowError();
        });

        it('throws an error if cells is not an array of J3Cells', () => {
            const coordinate = createJ3Coordinate(0, 0, 0);
            const cells: any[] = [
                {coordinate: {x: 0, y: 0}, value: 'foo'},
                {coordinate: createJ3Coordinate(1, 0, 0), value: 123}
            ];
            expect(() => createJ3Row(coordinate, cells as readonly J3Cell[])).toThrowError();
        });

    });

});
