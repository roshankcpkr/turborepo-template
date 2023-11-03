/** @type {import('tailwindcss').Config} */
const sharedConfig = require("tailwindconfig");
module.exports = {
  ...sharedConfig,
  content: [
    "./**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};