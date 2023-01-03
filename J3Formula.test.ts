// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJ3Formula, J3Formula } from "./J3Formula";

describe('J3Formula', () => {

    describe('createJ3Formula', () => {

        it('can create formulas', () => {
            expect( () => createJ3Formula('Y1:Y') ).not.toThrow();
        })

    });

});
