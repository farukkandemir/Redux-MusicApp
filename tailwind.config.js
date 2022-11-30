{
  import("tailwindcss").Config;
}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#191624",
      },
      gridTemplateColumns: {
        "song-grid": "repeat(auto-fit, minmax(200px,1fr))",
      },
    },
  },
  plugins: [],
};
