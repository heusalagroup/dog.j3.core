// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { J3Row } from "./J3Row";
import { J3Coordinate } from "./J3Coordinate";

export interface J3Layer {
    readonly coordinate : J3Coordinate;
    readonly rows       : readonly J3Row[];
}

export function createJ3Layer (
    coordinate : J3Coordinate,
    rows : readonly J3Row[]
) {
    return {
        coordinate,
        rows
    };
}
