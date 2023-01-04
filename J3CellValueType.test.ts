// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { isJ3CellValueType } from './J3CellValueType';

describe('J3CellValueType', () => {

    describe('isJ3CellValueType', () => {
        it('returns true for strings', () => {
            expect(isJ3CellValueType('hello')).toBe(true);
        });

        it('returns true for numbers', () => {
            expect(isJ3CellValueType(123)).toBe(true);
        });

        it('returns true for booleans', () => {
            expect(isJ3CellValueType(true)).toBe(true);
        });

        it('returns false for objects', () => {
            expect(isJ3CellValueType({})).toBe(false);
        });

        it('returns false for arrays', () => {
            expect(isJ3CellValueType([])).toBe(false);
        });

        it('returns false for undefined', () => {
            expect(isJ3CellValueType(undefined)).toBe(false);
        });

        it('returns false for null', () => {
            expect(isJ3CellValueType(null)).toBe(false);
        });
    });

});
