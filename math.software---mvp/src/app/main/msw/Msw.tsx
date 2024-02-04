// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

import mswIcon from "@app/assets/msw.svg";
import pureIcon from "@app/assets/pure.svg";
import { Heading, SubHeading } from "@app/main/Heading.tsx";

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

            <section>
                <SubHeading
                    id="pure"
                    title="Pure"
                    icon={ pureIcon }
                ></SubHeading>

                <p>Mathematics</p>

                <p>
                    MSW supports mathematics similarly to functional languages
                    supporting first-class functions, resulting in domain
                    expertise
                    with a <b>DSL (Domain-Specific Language)</b> engineered for
                    expressive mathematics.
                </p>

                <p>
                    First-Class mathematics enables state-of-the-art
                    software that uncouples the math <b>domain</b> from
                    the engineering <b>implementation</b>.
                </p>

                <p>
                    The definition of mathematics via its DSL results
                    in <a href="/">math.software </a>
                    empowering <b>focused</b> mathematicians with no engineering
                    requirements.
                </p>
            </section>
        </section>
    </>;
}

export default Msw;
