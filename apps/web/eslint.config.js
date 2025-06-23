import nextJsConfig from "@repo/eslint-config/next-js";
import tseslint from "typescript-eslint";

export default tseslint.config(...nextJsConfig);
