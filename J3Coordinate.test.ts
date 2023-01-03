// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJ3Coordinate, J3Coordinate } from "./J3Coordinate";

describe('J3Coordinate', () => {

    describe('createJ3Coordinate', () => {

        it('can create coordinates', () => {
            const result = createJ3Coordinate(1, 2, 3);
            expect( result.x ).toStrictEqual(1);
            expect( result.y ).toStrictEqual(2);
            expect( result.z ).toStrictEqual(3);
        })

    });

});
