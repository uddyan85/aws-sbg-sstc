/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        // 🔵 AWS-style base UI font
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],

        // 💎 Premium AWS Summit-style headings
        display: [
          "var(--font-jakarta)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],

        // ⚙️ Developer / cloud infra / logs
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],

        // 🔴 Amazon Ember style fallback (mimic AWS branding)
        amazon: [
          "var(--font-inter)",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },

      fontSize: {
        hero: ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
        h1: ["3rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        h2: ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        h3: ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        body: ["1rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        micro: ["0.75rem", { lineHeight: "1.4" }],
      },

      fontWeight: {
        thin: "100",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        black: "900",
      },

      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.02em",
        wider: "0.05em",
      },
    },
  },

  plugins: [],
};