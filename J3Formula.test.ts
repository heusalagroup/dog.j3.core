// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJ3Formula, isJ3Formula, isJ3FormulaOrUndefined, J3Formula } from "./J3Formula";

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
            // @ts-ignore
            expect(() => createJ3Formula()).toThrowError('Formula must have a value');
        });

        it('throws an error if value is not a string', () => {
            expect(() => createJ3Formula(123 as any)).toThrowError('Formula value must be a string');
        });

    });

    describe('isJ3Formula', () => {

        it('returns true for a valid J3Formula object', () => {
            expect(isJ3Formula({ value: '2+2' })).toBe(true);
        });

        it('returns false if value is missing', () => {
            expect(isJ3Formula({})).toBe(false);
        });

        it('returns false if value is not a string', () => {
            expect(isJ3Formula({ value: 123 })).toBe(false);
        });

        it('returns false if object has additional keys', () => {
            expect(isJ3Formula({ value: '2+2', extraKey: 'foo' })).toBe(false);
        });

        it('returns false for non-objects', () => {
            expect(isJ3Formula(null)).toBe(false);
            expect(isJ3Formula(undefined)).toBe(false);
            expect(isJ3Formula(123)).toBe(false);
            expect(isJ3Formula('abc')).toBe(false);
            expect(isJ3Formula(true)).toBe(false);
        });

    });

    describe('isJ3FormulaOrUndefined', () => {
        it('returns true for a valid J3Formula object', () => {
            expect(isJ3FormulaOrUndefined({
                                              value: '=SUM(A1, B1)'
                                          })).toBe(true);
        });

        it('returns true for undefined', () => {
            expect(isJ3FormulaOrUndefined(undefined)).toBe(true);
        });

        it('returns false for a non-object value', () => {
            expect(isJ3FormulaOrUndefined('not an object')).toBe(false);
        });

        it('returns false for an object with an invalid "value" property', () => {
            expect(isJ3FormulaOrUndefined({
                                              value: 123
                                          })).toBe(false);
        });

        it('returns false for an object with an additional property', () => {
            expect(isJ3FormulaOrUndefined({
                                              value: '=SUM(A1, B1)',
                                              additional: 'property'
                                          })).toBe(false);
        });
    });

});
