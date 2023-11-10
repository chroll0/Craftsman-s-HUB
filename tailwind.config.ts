import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#30AF5B",
          90: "#001620",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        orange: {
          50: "#FF814C",
        },
        blue: {
          70: "#021639",
          90: "#0d5ba6",
        },
        yellow: {
          50: "#FEC601",
        },
      },
      screens: {
        xs: "400px",
        md: "860px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      boxShadow: {
        "3xl": "0px -5px 25px -3px rgba(0, 1, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
