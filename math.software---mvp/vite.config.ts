import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// @ts-expect-error This dev dep must be fixed to support its types correctly
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig(
    {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        plugins: [ react(), eslintPlugin() ],
    },
);
