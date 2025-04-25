import js from "@eslint/js";
import globals from "globals";
import importPlugin from "eslint-plugin-import";
import { defineConfig, globalIgnores } from "eslint/config";
import babelParser from "@babel/eslint-parser";

export default defineConfig([
  {
    files: ["**/*.js"],
    ignores: ["dist/**"],
    languageOptions: {
      ecmaVersion: 6,
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parser: babelParser, // 使用 Babel ESLint 解析器
      parserOptions: {
        sourceType: "module",
        requireConfigFile: true, // ✅ 从 babel.config.js 读取，内联配置
      },
    },

    plugins: {
      import: importPlugin, // ✅ 对应插件要引入进来
    }, // 解决动态导入语法报错
    rules: {
      ...js.configs.recommended.rules,
      "no-var": "error",
    },
  },
  // globalIgnores(["dist/**"]), // 忽略文件
]);
