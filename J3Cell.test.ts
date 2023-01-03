// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJ3Cell, J3Cell } from "./J3Cell";
import { createJ3Coordinate } from "./J3Coordinate";

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

    });

});
