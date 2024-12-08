import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-blueGradient":
          "linear-gradient(var(--gradient-direction, to right), #00acff, #0034ff, #021027, #1000ff)",
        "primary-whiteGradient":
          "linear-gradient(var(--gradient-direction, to right), #ffffff, #9a9a9a, #cecece)",
        "primary-grayGradient":
          "linear-gradient(var(--gradient-direction, to right), #141414, #5c5c5c)",
        "primary-tealGradient":
          "linear-gradient(var(--gradient-direction, to right), #00fd2, #006799)",
        "secondary-blueGradient":
          "linear-gradient(var(--gradient-direction, to right), #000c24, #080061)",
        "secondary-whiteGradient":
          "linear-gradient(var(--gradient-direction, to right), #ffffff, #b3b3b3)",
        "primary-blueRadial":
          "radial-gradient(var(--gradient-shape, circle), var(--gradient-position, center) #00acff, #0034ff, #021027, #1000ff)",
        "primary-whiteRadial":
          "radial-gradient(var(--gradient-shape, circle), var(--gradient-position, center) #ffffff, #9a9a9a, #cecece)",
        "primary-grayRadial":
          "radial-gradient(var(--gradient-shape, circle), var(--gradient-position, center) #141414, #5c5c5c)",
        "primary-tealRadial":
          "radial-gradient(var(--gradient-shape, circle), var(--gradient-position, center) #00fd2, #006799)",
        "secondary-blueRadial":
          "radial-gradient(var(--gradient-shape, circle), var(--gradient-position, center) #000c24, #080061)",
        "secondary-whiteRadial":
          "radial-gradient(var(--gradient-shape, circle), var(--gradient-position, center) #ffffff, #b3b3b3)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        geo: {
          lightBlue1: "#00b7ff",
          lightBlue2: "#00c4ff",
          white: "#ffffff",
          primary: "#0202ff",
          black: "#030122",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
