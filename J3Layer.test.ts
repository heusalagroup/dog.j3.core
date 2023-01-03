// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJ3Layer, J3Layer } from "./J3Layer";
import { createJ3Coordinate } from "./J3Coordinate";

describe('J3Layer', () => {

    describe('createJ3Layer', () => {

        it('can create empty layer', () => {
            expect( () => createJ3Layer(
                createJ3Coordinate(0, 0 , 0),
                []
            )).not.toThrow();
        });

    });

});
