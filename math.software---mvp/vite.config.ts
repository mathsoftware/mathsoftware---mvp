// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// @ts-expect-error This dev dep must be fixed to support its types correctly
import eslintPlugin from "vite-plugin-eslint";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig(
    {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        plugins: [ react(), eslintPlugin() ],
        resolve: {
            alias: {
                "@": resolve(__dirname, "src"),
                "@sys": resolve(__dirname, "src/sys"),
                "@math": resolve(__dirname, "src/math"),
                "@ui": resolve(__dirname, "src/ui"),
                "@app": resolve(__dirname, "src/app"),
            },
        },
    },
);
