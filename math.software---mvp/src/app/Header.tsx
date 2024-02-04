// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

import "@app/Header.css";
import { useEffect, useState } from "react";

function Header() {
    const [ isScrolledDown, setIsScrolledDown ] = useState<boolean>(false);
    const [ lastScrollTop, setLastScrollTop ] = useState<number>(0);

    useEffect(() => {
        const headingHeightPx = 52; // 52px desktop, 38px mobile
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            setIsScrolledDown(scrollTop > lastScrollTop || scrollTop > headingHeightPx);
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [ lastScrollTop ]);

    return <>
        <header>
            <nav
                className={ `d-flex w-50 p-0 fixed-top ${ isScrolledDown ? "compact" : "" }` }
            >
                <div className="bg"></div>
                <ul className="navbar-nav center">
                    <li className="nav-item d-flex flex-column">
                        <a
                            className="navbar-brand nav-link flex-fill p-0"
                            href="/"
                        >
                            <h1>Math</h1>
                            <img
                                src="/math.svg"
                                alt="Math"
                                className="nav-icon"
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    </>;
}

export default Header;
