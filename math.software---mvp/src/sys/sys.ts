// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

export interface ToString {
    toString(): string;
}

export function toString(this: object) {
    return JSON.stringify(this);
}
