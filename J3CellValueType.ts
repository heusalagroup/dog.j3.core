// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { isBoolean, isNumber, isString } from "../../../fi/hg/core/modules/lodash";

/**
 * Type for a cell value in a `J3Grid`.
 */
export type J3CellValueType = string | number | boolean;

/**
 * Determines if a value is a valid `J3CellValueType`.
 *
 * A `J3CellValueType` is a string, number, or boolean.
 *
 * @param {any} value - The value to check.
 * @returns {value is J3CellValueType} `true` if the value is a valid `J3CellValueType`; otherwise, `false`.
 */
export function isJ3CellValueType (value : any) : value is J3CellValueType {
    return (
        isString(value)
        || isNumber(value)
        || isBoolean(value)
    );
}
