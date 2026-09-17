import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

// The clinic's phone, email, address and opening hours were once hand-typed in
// four files, and the hours drifted apart — the footer advertised 16:00 while
// the contact page said 17:00. They now live in src/lib/site.ts. These guards
// fail the lint gate if one is typed as a literal anywhere else, so the same
// drift cannot come back quietly.
const clinicDetails = [
  { name: "the phone number", pattern: "0793[- ]?10[- ]?35[- ]?46|\\+?46\\s?79[- ]?3" },
  { name: "the email address", pattern: "ekkiropraktik\\.se" },
  { name: "the street address", pattern: "Annagatan" },
  { name: "an opening hour", pattern: "\\d{2}:\\d{2}" },
];

const clinicDetailGuards = clinicDetails.flatMap(({ name, pattern }) =>
  ["Literal", "JSXText", "TemplateElement"].map((node) => ({
    selector: `${node}[${node === "TemplateElement" ? "value.raw" : "value"}=/${pattern}/]`,
    message: `Hardcoded ${name}. Import it from "@/lib/site" instead — that module is the single source of truth, and duplicating it is what made the opening hours disagree.`,
  })),
);

export default tseslint.config(
  { ignores: ["dist", ".output", ".vinxi"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "server-only",
              message:
                "TanStack Start does not use the Next.js `server-only` package. Rename the module to `*.server.ts` or mark it with `@tanstack/react-start/server-only`.",
            },
          ],
        },
      ],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],
      "no-restricted-syntax": ["error", ...clinicDetailGuards],
    },
  },
  {
    // src/lib/site.ts is where these values are supposed to live.
    files: ["src/lib/site.ts"],
    rules: { "no-restricted-syntax": "off" },
  },
  eslintPluginPrettier,
);
