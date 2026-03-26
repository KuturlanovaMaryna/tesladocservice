import { defineConfig } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";

export default defineConfig({
  root: true,
  plugins: {
    next: nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
  },
});
