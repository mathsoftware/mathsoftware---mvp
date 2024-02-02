// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

import { APP_VERSION_LABEL } from "@/info.tsx";

function Footer() {
    return <>
        <footer>
            <div className="nav row">
                <section className="col-6">
                    <h5>
                        Math Software
                    </h5>
                    <ul>
                        <li>
                            <a href="https://math.software">Math</a>
                        </li>
                        <li>
                            <a href="https://rsm.math.software">Repsymo</a>
                        </li>
                    </ul>
                </section>

                <section className="col-6">
                    <h5>
                        MSW Engineer
                    </h5>

                    <ul>
                        <li>
                            <a href="https://mathsoftware.engineer">Engineer</a>
                        </li>
                    </ul>

                    <div>
                        Founder Edition Engineering Works
                    </div>
                </section>

                <section className="col-12 legal">
                    <h5>
                        Legal
                    </h5>

                    <h6>MVP: Math.Software</h6>

                    <p>
                        Copyright © 2024 Tobias Briones. All rights reserved.
                    </p>

                    <div className="notice">
                        <p>
                            <b>Web App</b>&nbsp;
                            licensed under the&nbsp;
                            <a href="https://github.com/mathsoftware/mathsoftware---mvp/blob/main/math.software---mvp/LICENSE">
                                BSD-3-Clause License
                            </a>.
                        </p>
                        <p>
                            Consult other projects in the platform for their
                            respective license, notices, and legal information.
                        </p>
                    </div>
                </section>

                <section className="col-12 legal">
                    <h5 className="text-center">About</h5>

                    <p className="text-center">
                        MSW: Modern mathematics powered by engineering.
                    </p>

                    <p className="text-center">
                        { APP_VERSION_LABEL }.
                    </p>
                </section>
            </div>
        </footer>
    </>;
}

export default Footer;
