// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { J3CellValueType } from "./J3CellValueType";
import { J3Formula } from "./J3Formula";
import { J3Coordinate } from "./J3Coordinate";

export interface J3Cell {
    readonly coordinate : J3Coordinate;
    readonly value      : J3CellValueType;
    readonly formula   ?: J3Formula;
}

export function createJ3Cell (
    coordinate : J3Coordinate,
    value      : J3CellValueType,
    formula   ?: J3Formula
) : J3Cell {
    return {
        coordinate,
        value,
        ...(formula ? {formula} : {})
    };
}
