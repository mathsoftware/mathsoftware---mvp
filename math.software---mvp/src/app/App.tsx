// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

import "bootstrap/dist/css/bootstrap.min.css";
import "@app/App.css";
import mswIcon from "@app/assets/msw.svg";
import { MathJax } from "better-react-mathjax";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { defCircle, newCircle } from "@math/geo.ts";
import Image from "@ui/Image.tsx";

function App() {
    const [ circle, setCircle ] = useState(defCircle);

    return <>
        <p>
            Contemplate the magnificence of
            <MathJax>
                { "`radius = 200 |sin(1/5 omega)| (px)`" }
            </MathJax>
        </p>
        <p>
            Position { circle.cp.toString() }, Radius: { circle.radius }
        </p>

        <div>
            <Button
                variant="primary"
                onClick={ () => setCircle(newCircle(
                    circle.cp,
                    circle.radius + 1,
                )) }
            >
                Increase the Radius
            </Button>
        </div>

        <div>
            <Image
                src={ mswIcon }
                caption="MSW: Providing Modern Mathematics"
            >
            </Image>
        </div>
    </>;
}

export default App;
