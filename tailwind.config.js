/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          colorViolet: '#1f1c2f',
          paleWhite: '#fcfcfc',
          'placeholder-black': '#000',
        },
        // meetings/index.js/notes
        width: {
          '350': '350px',
          'sb_size': '25rem', // new/searchbar
        },
        // meetings/index.js/notes
        fontSize: {
          'content29': '26px',
        },
        // meetings/index.js/content
        margin: {
          'n-0.5': '-0.5rem',
        },
        // meetings/index.js/notes
        height: {
          '85vh': '85vh',
          'heightSize': '28rem',
          '86px': '86px', // new/innercard
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        fontWeight: {
          'hover-bold': '600',
          'extra-bold': '650',
          'name': '600',
        },
        spacing: {
          'num': '0.125rem', // 2px
          '0.25': '0.0625rem', // 1px
        },
        padding: {
          '38': '9.4rem',
        }
      },
    },
    plugins: [],
  };
  