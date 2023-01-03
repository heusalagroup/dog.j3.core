// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { J3Cell } from "./J3Cell";
import { J3Coordinate } from "./J3Coordinate";

export interface J3Row {
    readonly coordinate : J3Coordinate;
    readonly cells : readonly J3Cell[];
}

export function createJ3Row (
    coordinate : J3Coordinate,
    cells      : readonly J3Cell[]
) {
    return {
        coordinate,
        cells
    };
}
