// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

import Header from "@app/main/Header.tsx";
import "@app/main/Main.css";
import Msw from "@app/main/msw/Msw.tsx";
import Math from "@app/main/math/Math.tsx";

function Main() {
    return <>
        <section>
            <main>
                <article>
                    <section id="math">
                        <Header></Header>
                        <Math></Math>
                    </section>

                    <Msw></Msw>
                </article>
            </main>
        </section>
    </>;
}

export default Main;
