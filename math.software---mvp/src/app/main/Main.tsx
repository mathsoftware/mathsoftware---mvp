// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

import Header from "@app/main/Header.tsx";
import "@app/main/Main.css";
import Msw from "@app/main/msw/Msw.tsx";

function Main() {
    return <>
        <section>
            <main>
                <article>
                    <section id="math">
                        <Header></Header>
                    </section>

                    <Msw></Msw>
                </article>
            </main>
        </section>
    </>;
}

export default Main;
