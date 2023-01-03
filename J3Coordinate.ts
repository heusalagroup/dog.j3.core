// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

export interface J3Coordinate {
    readonly x : number;
    readonly y : number;
    readonly z : number;
}

export function createJ3Coordinate (
    x : number,
    y : number,
    z : number
) : J3Coordinate {
    return {
        x,
        y,
        z
    }
}
