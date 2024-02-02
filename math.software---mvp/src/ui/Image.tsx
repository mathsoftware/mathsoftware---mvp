// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

interface ImageProps {
    src: string;
    alt?: string;
    caption?: string;
}

function Image(props: ImageProps) {
    const { src, caption } = props;
    const alt = getAlt(props);

    const plainImg = () => <>
        <img src={ src } alt={ alt } />
    </>;

    const figImage = (caption: string) => <>
        <figure>
            { plainImg() }

            <figcaption>{ caption }</figcaption>
        </figure>
    </>;

    return <>{ caption ? figImage(caption) : plainImg() }</>;
}

function getAlt({ src, alt }: ImageProps) {
    return alt ?? src;
}

export default Image;
