// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJ3Coordinate, J3Coordinate } from "./J3Coordinate";

describe('J3Coordinate', () => {

    describe('createJ3Coordinate', () => {

        it('can create coordinates', () => {
            const result = createJ3Coordinate(1, 2, 3);
            expect( result.x ).toStrictEqual(1);
            expect( result.y ).toStrictEqual(2);
            expect( result.z ).toStrictEqual(3);
        });

        it('throws an error if x is not a number', () => {
            // @ts-ignore
            expect(() => createJ3Coordinate('not a number', 2, 3)).toThrow();
        });

        it('throws an error if y is not a number', () => {
            // @ts-ignore
            expect(() => createJ3Coordinate(1, 'not a number', 3)).toThrow();
        });

        it('throws an error if z is not a number', () => {
            // @ts-ignore
            expect(() => createJ3Coordinate(1, 2, 'not a number')).toThrow();
        });

        it('creates a coordinate with the specified x, y, and z values', () => {
            const coordinate = createJ3Coordinate(1, 2, 3);
            expect(coordinate).toEqual({ x: 1, y: 2, z: 3 });
        });

    });

});
