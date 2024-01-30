// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MathJax } from "better-react-mathjax";

function App() {
    return (
        <>
            <p>
                Contemplate the magnificence of
                <MathJax>
                    {"`radius = 200 |sin(1/5 omega)| (px)`"}
                </MathJax>
            </p>
        </>
    );
}

export default App;
