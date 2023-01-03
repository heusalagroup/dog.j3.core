// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJ3Cell, J3Cell } from "./J3Cell";
import { createJ3Coordinate } from "./J3Coordinate";
import { createJ3Formula } from "./J3Formula";

describe('J3Cell', () => {

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

        it('can create cell with undefined value', () => {
            // @ts-ignore
            const result = createJ3Cell(createJ3Coordinate(2, 3, 4), undefined);
            expect(result.coordinate.x).toStrictEqual(2);
            expect(result.coordinate.y).toStrictEqual(3);
            expect(result.coordinate.z).toStrictEqual(4);
            expect(result.value).toBeUndefined();
            expect(result.formula).toBeUndefined();
        });

        it('throws error if formula is provided with a non-string value', () => {
            expect(() => createJ3Cell(createJ3Coordinate(2, 3, 4), 123, createJ3Formula('=SUM(A1:A3)'))).toThrow();
        });

    });

});
