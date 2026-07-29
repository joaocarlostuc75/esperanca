import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [
  {
    rules: {
      "no-unused-vars": "off",
      "no-console": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
    },
  },
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**"],
  },
];

export default eslintConfig;
