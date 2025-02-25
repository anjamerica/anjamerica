module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#07038C",
        "primary-yellow": "#FFD700",
        "primary-gray": "#676767",
        "primary-black": "#08081E",
        "primary-gray-dark": "#3A3A48",
        "blue-dark": "#07081D",
        "bg-light-grey": "#EFEFEFE",
        "secondary-gray": "#464545",
        "primary-violet": "#252244",

        "gray-medium": "#3A3A48",
        "primary-blue-dark": "#05061A",
        "secondary-gray": "#535353",
        "violet-dark": "#0A0726",
        "primary-red": "#E70911",
        "subheading-gray": "#434A53",
        "gray-dark": "#575757",

        primary: "#3E36B6",
        secondary: "#141414",
        tertiary: "#404040",
        quarternery: "#020202",
        senary: "#1A202C",
        septenary: "#2C2C2C",
        orange: {
          primary: "#E58411",
        },
        blue: {
          primary: "#3E36B6",
          secondary: "#2B6CB0",
          tertiary: "#EDF2F7",
          quarternery: "#6F84AB",
          light: "#F8F9FE",
        },
        gray: {
          light: "#B7B7B7",
          medium: "#666666",
          dark: "#161616",
          darker: "#222222",
        },
      },
      textColor: {
        primary: "#3E36B6",
        secondary: "#141414",
        tertiary: "#404040",

        gray: {
          secondary: "#141414",
          tertiary: "#404040",
          quarternery: "#020202",
          senary: "#1A202C",
          septenary: "#2C2C2C",
          light: "#B7B7B7",
          medium: "#666666",
          dark: "#1E1E1E",
        },
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },
      fontFamily: {
        sans: ["sans"],
      },
      backgroundImage: {
        "image-mobile": "url('/landing/bg-img-mob.png')",
        "image-web": "url('/landing/bg.png')",
        "image-web-career": "url('/landing/career.png')",
        "landing-image-mob": "url('/landing/bg_landing.svg')",
        "landing-image-web": "url('/landing/bg_web.png')",
        "polygon-image": "url('/assets/landing/polygon.svg')",
      },
      safelist: ["curved-container"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "false",
};
