/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'];
export const theme = {
	extend: {},
};
export const plugins = [require("@tailwindcss/typography"), require("daisyui")];
export const daisyui = {
	themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
	darkTheme: "dark", // name of one of the included themes for dark mode
	logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
};