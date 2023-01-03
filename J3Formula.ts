// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

export interface J3Formula {
    readonly value : string;
}

export function createJ3Formula (
    formula: string
) {
    return {
        value: formula
    }
}
