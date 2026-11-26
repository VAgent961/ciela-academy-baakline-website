import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
  "primary": "#C85C3A",
  "secondary": "#E8D5C4",
  "accent": "#D96B4A",
  "background": "#FAF8F5",
  "surface": "#FFFFFF",
  "ink": "#1A1F2E",
  "muted": "#6B7280",
  "dark": "#0F141E"
},
      fontFamily: {
  "heading": [
    "Syne",
    "sans-serif"
  ],
  "body": [
    "Readex Pro",
    "sans-serif"
  ]
},
      fontSize: {},
      spacing: {},
      borderRadius: {},
      boxShadow: {
  "card": "0 4px 12px rgba(0,0,0,0.06)",
  "elevated": "0 10px 30px rgba(0,0,0,0.12)"
},
    },
  },
  plugins: [],
};

export default config;
