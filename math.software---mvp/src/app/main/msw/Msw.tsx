// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

import "./Msw.css";
import mswIcon from "@app/assets/msw.svg";
import pureIcon from "@app/assets/pure.svg";
import appliedIcon from "@app/assets/applied.svg";
import specialIcon from "@app/assets/special.png";
import { Heading, SubHeading } from "@app/main/Heading.tsx";

function Msw() {
    return <>
        <section>
            <div className="wrap">
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
            </div>

            <section className="pure">
                <div className="wrap">
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
                </div>
            </section>

            <section className="applied">
                <div className="wrap">
                    <SubHeading
                        id="applied"
                        title="Applied"
                        icon={ appliedIcon }
                    ></SubHeading>

                    <p>Applying Pure MSW for Concrete Representations</p>

                    <p>
                        Meaningful real-world representations can be derived from
                        pure mathematical software, like operations research, model
                        visualization, education, etc.
                    </p>
                </div>
            </section>

            <section className="special">
                <div className="wrap">
                    <SubHeading
                        id="special"
                        title="Special"
                        icon={ specialIcon }
                    ></SubHeading>

                    <p>Special Software and Models</p>

                    <p>
                        Extended software required in real-world computing like,
                        operations, high-performance implementations, and academic
                        tools are, examples of external domains for powering modern
                        mathematics.
                    </p>

                    <p>
                        All the necessary tools extrinsic to mathematics are aimed
                        to be equipped by <b>SWAM (Special Software and Models)</b>.
                    </p>
                </div>
            </section>
        </section>
    </>;
}

export default Msw;
