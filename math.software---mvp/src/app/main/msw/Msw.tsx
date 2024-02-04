// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

import mswIcon from "@app/assets/msw.svg";
import { Heading } from "@app/main/Heading.tsx";

function Msw() {
    return <>
        <section>
            <Heading id="msw" title="Math Software" icon={ mswIcon }></Heading>

            <p>Modern Mathematics Powered by Engineering</p>

            <p>
                MSW provides a modern approach to mathematics formalized by
                mathematical software engineering and further domain-specific
                apps and tools.
            </p>

            <p>
                Mathematical software is either <b>Pure</b>, <b>Applied</b>, or
                <b> Special</b>.
            </p>
        </section>
    </>;
}

export default Msw;
