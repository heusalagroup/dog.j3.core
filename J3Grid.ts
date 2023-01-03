// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { J3Layer } from "./J3Layer";

export interface J3Grid {
    readonly layers : readonly J3Layer[];
}

export function createJ3Grid (
    layers: readonly J3Layer[]
) {
    return {
        layers
    }
}
