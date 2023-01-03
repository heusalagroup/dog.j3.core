// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJ3Row, J3Row } from "./J3Row";
import { createJ3Coordinate } from "./J3Coordinate";

describe('J3Row', () => {

    describe('createJ3Row', () => {

        it('can create empty row', () => {
            expect( () => createJ3Row(
                createJ3Coordinate(0, 0 , 0),
                [])
            ).not.toThrow();
        })

    });

});
