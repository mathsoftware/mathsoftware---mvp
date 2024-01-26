import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig(
    {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        plugins: [ react(), eslintPlugin() ],
    },
);
