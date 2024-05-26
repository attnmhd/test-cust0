const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cover : "url('/src/assets/groom-putting-ring-bride-s-finger.jpg')"
      }
      ,
      fontFamily: {
        montserat : ['Montserrat'],
        dcScript : ['Dancing Script']
      }
    },
  },
  plugins: [],
});
