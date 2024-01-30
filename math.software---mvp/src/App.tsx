// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

import { useState } from "react";
import mswLogo from "./assets/msw.svg";
import mathLogo from "/math.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Alert, Button } from "react-bootstrap";
import { MathJax } from "better-react-mathjax";

function App() {
    const [ count, setCount ] = useState(0);
    const [ show, setShow ] = useState(true);

    return (
        <>
            <div>
                <a href="/">
                    <img
                        src={mathLogo}
                        className="logo"
                        alt="Math Logo"
                    />
                </a>
                <a href="#">
                    <img
                        src={mswLogo}
                        className="logo react"
                        alt="MSW Logo"
                    />
                </a>
            </div>
            <h1>Math</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>

            <br />
            <br />
            <br />
            <p>
                Contemplate the magnificence of
                <MathJax>
                    {"`radius = 200 |sin(1/5 omega)| (px)`"}
                </MathJax>
            </p>

            <div>
                <Alert show={show} variant="success">
                    <Alert.Heading>My Alert</Alert.Heading>
                    <p>
                        Duis mollis, est non commodo luctus, nisi erat
                        porttitor
                        ligula, eget lacinia odio sem nec elit. Cras mattis
                        consectetur purus sit amet fermentum.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button
                            onClick={() => setShow(false)}
                            variant="outline-success"
                        >
                            Close me
                        </Button>
                    </div>
                </Alert>

                {
                    !show &&
                    <Button onClick={() => setShow(true)}>
                        Show Alert
                    </Button>
                }
            </div>
        </>
    );
}

export default App;
