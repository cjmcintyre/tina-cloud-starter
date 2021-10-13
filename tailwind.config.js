const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      teal: colors.cyan,
      blue: {
        DEFAULT: '#018AC1',
        '50': '#A9E6FF',
        '100': '#90DFFE',
        '200': '#5DD0FE',
        '300': '#2AC1FE',
        '400': '#01AEF4',
        '500': '#018AC1',
        '600': '#01668E',
        '700': '#00415C',
        '800': '#001D29',
        '900': '#000000'
      },
      green: {
        DEFAULT: '#8BC63E',
        '50': '#F5FAEF',
        '100': '#EAF5DB',
        '200': '#D2E9B4',
        '300': '#BADD8D',
        '400': '#A3D265',
        '500': '#8BC63E',
        '600': '#70A130',
        '700': '#557A24',
        '800': '#395318',
        '900': '#1E2B0D'
      },
      red: colors.rose,
      purple: colors.purple,
      pink: colors.pink,
      yellow: colors.yellow,
      gray: {
        50: "#F6F6F8",
        100: "#EDECF1",
        150: "#E6E4EC",
        200: "#E1DEE8",
        250: "#C9C6D1",
        300: "#B1AEBA",
        400: "#908D9A",
        500: "#716D7A",
        600: "#565260",
        700: "#3D3A47",
        800: "#312E3B",
        900: "#22212E",
        1000: "#1A1A26",
      },
      orange: {
        200: "#EB7752",
        300: "#EA6C45",
        400: "#E85C30",
        500: "#EC4815",
        600: "#DC4419",
        700: "#D04017",
        800: "#C1360F",
      },
    },
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1500px",
      "2xl": "1800px",
    },
    fontSize: {
      xs: ".875rem",
      sm: "1rem",
      base: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3.25rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
    },
    borderWidth: {
      DEFAULT: "3px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
    },
    extend: {
      textDecoration: ["active"],
      opacity: {
        7: ".075",
        15: ".15",
      },
      maxWidth: {
        "8xl": "86rem",
      },
      spacing: {
        128: "32rem",
      },
      zIndex: {
        "-1": "-1",
      },
      fontFamily: {
        nunito: ["Nunito", ...defaultTheme.fontFamily.sans],
        lato: ["Lato", ...defaultTheme.fontFamily.sans],
        mono: ['Source Code Pro', ...defaultTheme.fontFamily.mono],
        mont: ['Montserrat', ...defaultTheme.fontFamily.sans],
        robotoSlab: ["Roboto Slab", ...defaultTheme.fontFamily.serif],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: {
              color: theme("colors.gray.700"),
              backgroundColor: theme("colors.gray.100"),
              lineHeight: 1.5,
            },
            code: {
              backgroundColor: theme("colors.gray.100"),
              padding: "0.25rem",
              borderRadius: "3px",
              margin: "-0.25rem 1px",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            "p:first-of-type": {
              fontSize: "1.125rem",
            },
             strong: {
              position: 'relative',
            },
            "strong::after": {
              position: 'absolute',
              content: '""',
              backgroundImage: "url('https://res.cloudinary.com/dyfo8zpbd/image/upload/v1633848003/underline1_ndu9id.svg')",
              backgroundRepeat: 'no-repeat',
              //zIndex: '-1',
              height: "0.35rem",
              bottom: "-0.225rem",
              left: "-0.3rem",
              right: "-0.3rem",
              backgroundSize: "cover",
            },
          },
        },
        tint: {
          css: {
            pre: {
              color: theme("colors.gray.800"),
              backgroundColor: theme("colors.gray.150"),
            },
          },
        },
        lg: {
          css: {
            pre: {
              lineHeight: 1.5,
            },
            "p:first-of-type": {
              fontSize: "1.365rem",
            },
          },
        },
        xl: {
          css: {
            pre: {
              lineHeight: 1.5,
            },
            "p:first-of-type": {
              fontSize: "1.365rem",
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            '[class~="lead"]': { color: theme("colors.gray.400") },
            a: { color: theme("colors.gray.100") },
            strong: { color: theme("colors.gray.100") },
            "ul > li::before": { backgroundColor: theme("colors.gray.700") },
            hr: { borderColor: theme("colors.gray.800") },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.800"),
            },
            h1: { color: theme("colors.gray.100") },
            h2: { color: theme("colors.gray.100") },
            h3: { color: theme("colors.gray.100") },
            h4: { color: theme("colors.gray.100") },
            code: {
              color: theme("colors.gray.100"),
              backgroundColor: theme("colors.gray.1000"),
            },
            "a code": { color: theme("colors.gray.100") },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: theme("colors.gray.900"),
            },
            thead: {
              color: theme("colors.gray.100"),
              borderBottomColor: theme("colors.gray.700"),
            },
            "tbody tr": { borderBottomColor: theme("colors.gray.800") },
          },
        },
        primary: {
          css: {
            color: theme("colors.gray.50"),
            '[class~="lead"]': { color: theme("colors.gray.400") },
            a: { color: theme("colors.gray.100") },
            strong: { color: theme("colors.gray.100") },
            "ul > li::before": { backgroundColor: theme("colors.gray.700") },
            hr: { borderColor: theme("colors.gray.800") },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.800"),
            },
            h1: { color: theme("colors.gray.100") },
            h2: { color: theme("colors.gray.100") },
            h3: { color: theme("colors.gray.100") },
            h4: { color: theme("colors.gray.100") },
            code: {
              color: theme("colors.gray.100"),
              backgroundColor: "rgba(0,0,0,0.15)",
            },
            "a code": { color: theme("colors.gray.100") },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: "rgba(0,0,0,0.15)",
            },
            thead: {
              color: theme("colors.gray.100"),
              borderBottomColor: theme("colors.gray.700"),
            },
            "tbody tr": { borderBottomColor: theme("colors.gray.800") },
          },
        },
      }),
    },
  },
  variants: {
    extend: { typography: ["tint", "dark", "primary"],
              position: ["relative", "absolute"],},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),
  ],
};
