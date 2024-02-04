// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

import "./Math.css";
import mathForthcomingBg from "@app/assets/math-forthcoming.png";

function Math() {
    return <>
        <div className="math-forthcoming d-flex flex-column justify-content-center">
            <img src={ mathForthcomingBg } alt="Math Forthcoming..." />
        </div>
    </>;
}

export default Math;
