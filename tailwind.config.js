/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        default: "#fbed21",
        00: "#323004",
        01: "#756f0e",
        02: "#fcf14d",
        03: "#fdf47a"
      },
      fontFamily: {
        notoSansThai: "Noto Sans Thai",
        anuphan: "Anuphan",
        poppins: "Poppins"
      },
      lineHeights: {
        0: "60",
        1: "40",
        2: "50",
        3: "30",
        4: "26",
        5: "24",
        6: "24.5"
      },
      fontWeights: {
    "notoSansThai_0": "Bold",
    "anuphan_1": "Regular",
    "notoSansThai_2": "SemiBold",
    "notoSansThai_3": "Regular",
    "notoSansThai_4": "Medium",
    "poppins_5": "Regular"
      },
      fontSize: {
        0: "14",
        1: "16",
        2: "20",
        3: "24",
        4: "28",
        5: "40",
        6: "48"
      },
      letterSpacing: {
        0: "-1%"
      },
      paragraphSpacing: {
        0: "0"
      }
    },
  },
}