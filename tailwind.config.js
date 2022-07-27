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
        "blue-dark":"#07081D",        
        "bg-light-grey":"#EFEFEFE", 
        "secondary-gray":"#464545",


        "primary-blue-dark": "#05061A",
        "primary-green": "#04c0de",
        "secondary-green": "#16A59E",     
        "primary-violet": "#252244",     
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
