import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";
import pluginOxlint from 'eslint-plugin-oxlint'


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    plugins: { js },
    extends: ["js/recommended"],
    ignores: [
      "**/node_modules/**",
      "**/dist/**"
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: { globals: globals.browser }
  },
  pluginVue.configs["flat/essential"],
  ...pluginOxlint.configs['flat/recommended']
]);