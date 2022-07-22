module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue-dark": "#05061A",
        "primary-green": "#33B5AF",
        "secondary-green": "#16A59E",
        "primary-gray": "#949495",
        "primary-violet": "#252244",
        "primary-blue": "#046AC8",
        "secondary-gray": "#535353",
        "violet-dark": "#0A0726",
        "primary-red":"#E70911",
        "subheading-gray":"#434A53",
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      fontFamily: {
				sans: ['sans'],
			},
    },
  },
  plugins: [],
};
