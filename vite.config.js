import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // ── Chunk Splitting ──────────────────────────────────────────────
    // Splits vendor libraries (react, framer-motion, lenis, bootstrap)
    // into separate cached chunks. Returning visitors load 0 JS for unchanged vendors.
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime — almost never changes
          "vendor-react": ["react", "react-dom"],
          // Animation libraries — chunked separately so they cache independently
          "vendor-motion": ["framer-motion", "motion", "lenis"],
          // UI libraries
          "vendor-ui": ["bootstrap", "react-bootstrap", "lucide-react", "react-icons"],
          // Router
          "vendor-router": ["react-router-dom"],
        },
      },
    },
    // ── Asset Inlining ───────────────────────────────────────────────
    // Assets smaller than 4KB are inlined as base64 — eliminates extra HTTP requests
    // for tiny SVG icons. Larger images stay as separate files (correct behavior).
    assetsInlineLimit: 4096,
    // ── CSS Code Splitting ───────────────────────────────────────────
    // Per-chunk CSS files improve loading parallelism
    cssCodeSplit: true,
  },
});
