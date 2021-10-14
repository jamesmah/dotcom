export const theme = {
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 760,
    lg: 1200,
    xl: 1440,
  },
  palette: {
    light: {
      1: `#ECEDED`,
      2: `#9CA9B3`,
      3: `#717D86`,
    },
    dark: {
      1: `#151719`,
      2: `#25282C`,
      3: `#33363A`,
    },
    primary: {
      1: `#6163FF`,
      2: `#ACADFF`,
      3: `#5658DD`,
      4: `#E9E9FF`,
    },
    secondary: {
      1: `#24E5AF`,
      2: `#73EFCC`,
      3: `#1CB68B`,
      4: `#D2F9EE`,
    },
    alert: {
      error: `#FF6171`,
      warning: `#FFA173`,
      success: `#24E5AF`,
    },
  },
}

export type Theme = typeof theme
export type Breakpoint = keyof Theme["breakpoints"]

export default theme
