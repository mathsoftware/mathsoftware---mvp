// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

import mswIcon from "@app/assets/msw.svg";

function Msw() {
    return <>
        <section>
            <a
                className="navbar-brand nav-link flex-fill p-0"
                href="#msw"
            >
                <h2>Math Software</h2>
                <img
                    src={ mswIcon }
                    alt="Math Software"
                    className="nav-icon"
                />
            </a>
        </section>
    </>;
}

export default Msw;
