// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJ3Cell, isJ3Cell, J3Cell } from "./J3Cell";
import { createJ3Coordinate } from "./J3Coordinate";
import { createJ3Formula } from "./J3Formula";

describe('J3Cell', () => {

    describe('isJ3Cell', () => {
        it('returns true for a valid J3Cell object', () => {
            const coord = createJ3Coordinate(1, 2, 3);
            const formula = createJ3Formula('=SUM(A1:B2)');
            const cell = createJ3Cell(coord, 4, formula);
            expect(isJ3Cell(cell)).toBe(true);
        });

        it('returns false for a non-object value', () => {
            expect(isJ3Cell(null)).toBe(false);
            expect(isJ3Cell(undefined)).toBe(false);
            expect(isJ3Cell(true)).toBe(false);
            expect(isJ3Cell(false)).toBe(false);
            expect(isJ3Cell(5)).toBe(false);
            expect(isJ3Cell('hello')).toBe(false);
        });

        it('returns false for an object with an invalid "coordinate" property', () => {
            expect(isJ3Cell({coordinate: 5, value: 4, formula: undefined})).toBe(false);
            expect(isJ3Cell({coordinate: {}, value: 4, formula: undefined})).toBe(false);
        });

        it('returns false for an object with an invalid "value" property', () => {
            const coord = createJ3Coordinate(1, 2, 3);
            expect(isJ3Cell({coordinate: coord, value: {}, formula: undefined})).toBe(false);
            expect(isJ3Cell({coordinate: coord, value: [], formula: undefined})).toBe(false);
        });

        it('returns false for an object with an invalid "formula" property', () => {
            const coord = createJ3Coordinate(1, 2, 3);
            expect(isJ3Cell({coordinate: coord, value: 4, formula: {}})).toBe(false);
            expect(isJ3Cell({coordinate: coord, value: 4, formula: []})).toBe(false);
        });
    });

    describe('createJ3Cell', () => {

        it('can create string cell', () => {
            const result = createJ3Cell(createJ3Coordinate(0, 1 , 2),'hello');
            expect( result.coordinate.x ).toStrictEqual(0);
            expect( result.coordinate.y ).toStrictEqual(1);
            expect( result.coordinate.z ).toStrictEqual(2);
            expect( result.value ).toStrictEqual('hello');
            expect( result?.formula ).toBeUndefined();
        });

        it('can create number cell', () => {
            const result = createJ3Cell(createJ3Coordinate(0, 1 , 2),123);
            expect( result.coordinate.x ).toStrictEqual(0);
            expect( result.coordinate.y ).toStrictEqual(1);
            expect( result.coordinate.z ).toStrictEqual(2);
            expect( result.value ).toStrictEqual(123);
            expect( result?.formula ).toBeUndefined();
        });

        it('can create boolean cell', () => {
            const result = createJ3Cell(createJ3Coordinate(0, 1 , 2),true);
            expect( result.coordinate.x ).toStrictEqual(0);
            expect( result.coordinate.y ).toStrictEqual(1);
            expect( result.coordinate.z ).toStrictEqual(2);
            expect( result.value ).toStrictEqual(true);
            expect( result?.formula ).toBeUndefined();
        });

        it('can create cell with formula', () => {
            const result = createJ3Cell(createJ3Coordinate(1, 2, 3), 'test', createJ3Formula('=SUM(A1:A3)'));
            expect(result.coordinate.x).toStrictEqual(1);
            expect(result.coordinate.y).toStrictEqual(2);
            expect(result.coordinate.z).toStrictEqual(3);
            expect(result.value).toStrictEqual('test');
            expect(result.formula).toStrictEqual({ value: '=SUM(A1:A3)' });
        });

        it('throws an error if value is not provided', () => {
            // @ts-ignore
            expect(() => createJ3Cell(createJ3Coordinate(2, 3, 4), undefined)).toThrow(TypeError);
        });

        it('throws error if formula is provided with a non-string value', () => {
            expect(() => createJ3Cell(
                createJ3Coordinate(2, 3, 4),
                123,
                // @ts-ignore
                {formula: 123}
           )).toThrow();
        });

    });

});
