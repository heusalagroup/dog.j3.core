// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { isJ3Layer, J3Layer } from "./J3Layer";
import { hasNoOtherKeysInDevelopment, isArrayOf, isNumber, isRegularObject } from "../../../fi/hg/core/modules/lodash";
import { isJ3Row, J3Row } from "./J3Row";

/**
 * Represents a three-dimensional grid of cells.
 *
 * @interface
 */
export interface J3Grid {
    /**
     * The layers in the grid.
     *
     * @type {readonly J3Layer[]}
     */
    readonly layers : readonly J3Layer[];
}

/**
 * Determines if the provided value is a `J3Grid` object.
 *
 * @param value - The value to test.
 * @returns True if the value is a `J3Grid` object, false otherwise.
 */
export function isJ3Grid (value : any) : value is J3Grid {
    return (
        isRegularObject(value)
        && hasNoOtherKeysInDevelopment(value, [
            'layers'
        ])
        && isArrayOf<J3Layer>(value?.layers, isJ3Layer)
    );
}

/**
 * Creates a new `J3Grid` object with the specified layers.
 *
 * @param {readonly J3Layer[]} layers - The layers to include in the new grid.
 * @returns {J3Grid} A new `J3Grid` object with the specified layers.
 */
export function createJ3Grid (
    layers: readonly J3Layer[]
) {
    if (!isArrayOf<J3Layer>(layers, isJ3Layer)) {
        throw new TypeError('`layers` be an array of J3Layers');
    }
    return {
        layers
    }
}
