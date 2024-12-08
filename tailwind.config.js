import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background CSS variable
        foreground: "var(--foreground)", // Custom foreground CSS variable
        green: "#79B900", // Custom green color
        fairGrey: "#868681",
      },
    },
  },
  plugins: [],
});

