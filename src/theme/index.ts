import { extendTheme } from "@chakra-ui/react";

// Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const fonts = {
  heading: "Rye",
  body: "Rubik",
};

const textStyles = {
  caption: {
    fontWeight: 700,
  },
  paragraph: {
    display: "none",
    fontWeight: 700,
  },
  h1: {
    fontFamily: "Rye",
  },
};

export const theme = extendTheme({ colors, fonts, textStyles });
