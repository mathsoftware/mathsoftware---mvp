// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

import { APP_VERSION_LABEL } from "@/info.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

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

                <section className="col-6">
                    <h5>
                        Social
                    </h5>

                    <div className="social my-2">
                        <div>MSW Open Source:</div>

                        <a
                            className="btn btn-github"
                            href="https://github.com/mathsoftware"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={ faGithub }></FontAwesomeIcon>
                        </a>

                        <br/>
                        <br/>
                        <div>Follow <b>MathSwe</b> to stay updated:</div>

                        <a
                            className="btn btn-linkedin"
                            href="https://www.linkedin.com/company/mathswe"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={ faLinkedin }></FontAwesomeIcon>
                        </a>
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
                            <b>Web App</b>
                            &nbsp;
                            licensed under the&nbsp;
                            <a href="https://github.com/mathsoftware/mathsoftware---mvp/blob/main/math.software---mvp/LICENSE">
                                BSD-3-Clause License
                            </a>
                            .
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
