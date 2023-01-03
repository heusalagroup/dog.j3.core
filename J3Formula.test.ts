// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJ3Formula, J3Formula } from "./J3Formula";

describe('J3Formula', () => {

    describe('createJ3Formula', () => {

        it('can create formulas', () => {
            expect( () => createJ3Formula('Y1:Y') ).not.toThrow();
        });

        it('creates a formula with the specified value', () => {
            const formula = 'Y1:Y';
            const j3Formula = createJ3Formula(formula);
            expect(j3Formula).toEqual({ value: formula });
        });

        it('throws an error if no value is provided', () => {
            expect(() => createJ3Formula('')).toThrowError('Formula must have a value');
        });

        it('throws an error if value is not a string', () => {
            expect(() => createJ3Formula(123 as any)).toThrowError('Formula value must be a string');
        });

    });

});
