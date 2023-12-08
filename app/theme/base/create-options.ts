import type { ThemeOptions } from "@mui/material/styles/createTheme";
import { createTypography } from "./create-typography";
import { neutral } from '../colors'
import { createComponents } from "./create-components";

export const createOptions = (): ThemeOptions => {
  return {
    spacing: 10,
    breakpoints: {
      values: {
        xxs: 0,
        xs: 360,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440,
        xxl: 1760,
      }
    },
    palette: {
      neutral
    },
    components: createComponents({}),
    shape: {
      borderRadius: 8,
    },
    typography: createTypography(),
  };
};
