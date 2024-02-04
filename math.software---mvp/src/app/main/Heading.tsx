// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

import { JSX } from "react";

interface HeadingProps {
    id: string;
    title: string;
    icon: string;
}

function getHeadingClass(heading: JSX.Element) {
    const name = heading.type as string;

    if (name === "h2") {
        return "heading";
    }
    else {
        return "subheading";
    }
}

function HeadingCard(heading: JSX.Element, id: string, icon: string) {
    const hClass = getHeadingClass(heading);
    const classes = `navbar-brand nav-link flex-fill p-0 ${ hClass }`;

    return <>
        <a
            className={ classes }
            href={ `#${ id }` }
        >
            { heading }
            <img
                src={ icon }
                alt="Math Software"
                className="nav-icon"
            />
        </a>
    </>;
}

export function Heading({ id, title, icon }: HeadingProps) {
    return HeadingCard(<h2>{ title }</h2>, id, icon);
}

export function SubHeading({ id, title, icon }: HeadingProps) {
    return HeadingCard(<h3>{ title }</h3>, id, icon);
}
