// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./msw-engineer.css";
import MathJaxContext from "better-react-mathjax/MathJaxContext";

const mathJaxConfig = {
    loader: { load: [ "input/asciimath" ] },
};

ReactDOM
    .createRoot(document.getElementById("root")!)
    .render(
        <React.StrictMode>
            <MathJaxContext config={mathJaxConfig}>
                <App />
            </MathJaxContext>
        </React.StrictMode>,
    );
