// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

import { toString, ToString } from "../sys/sys.ts";

export interface Point extends ToString {
    x: number;
    y: number;
}

export function newPoint(x: number, y: number): Point {
    return { x, y, toString };
}

export const defPoint = newPoint(0, 0);

export interface Circle extends ToString {
    cp: Point;
    radius: number;
}

export function newCircle(cp: Point, radius: number): Circle {
    return { cp, radius, toString };
}

export const defCircle = newCircle(defPoint, 0);
