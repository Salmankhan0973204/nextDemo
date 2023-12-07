import type { ThemeOptions } from "@mui/material/styles/createTheme";
import { createTypography } from "./create-typography";
import { neutral } from '../colors'

interface ExtendedBreakpoints {
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

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
      } as ExtendedBreakpoints,
    },
    palette: {
      neutral

    },

    shape: {
      borderRadius: 8,
    },
    typography: createTypography(),
  };
};
