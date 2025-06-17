/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6750A4',
        'primary-on': '#FFFFFF',
        surface: '#FFFBFE',
        'surface-on': '#1C1B1F',
        'surface-on-muted': '#49454F',
        'surface-container': '#E8DEF8',
        'surface-container-low': '#F7F2FA',
        'surface-variant': '#E7E0EC',
        outline: '#79747E',
        // Dark mode colors - these will be used when 'dark' class is applied
        'dark-surface': '#1C1B1F',
        'dark-surface-on': '#E6E1E5',
        'dark-surface-on-muted': '#948F99',
        'dark-surface-container': '#2F2E33',
        'dark-surface-container-low': '#252328',
        'dark-surface-variant': '#49454F',
        'dark-outline': '#948F99',
      },
      boxShadow: {
        'elevation-1': '0px 1px 2px rgba(0, 0, 0, 0.1)',
        'elevation-3': '0px 4px 6px rgba(0, 0, 0, 0.15)',
        // Dark mode shadows (optional, can be adjusted)
        'dark-elevation-1': '0px 1px 2px rgba(0, 0, 0, 0.2)',
        'dark-elevation-3': '0px 4px 6px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        display: ['"Google Sans Display", "Stanton", sans-serif'],
        title: ['"Google Sans", "Product Sans", sans-serif'],
        sans: ['Inter', 'sans-serif'],
        label: ['"Roboto Mono", "Fira Code", monospace'],
      },
    },
  },
  plugins: [],
};
