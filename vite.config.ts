import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: { open: true },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      thresholds: {
        lines: 85,
        branches: 70,
        functions: 70,
        statements: 85,
      },
      include: ["src/**"],
      exclude: ["src/main.tsx"],
      skipFull: true, // don't show if 100% covered
    },
  },
});
