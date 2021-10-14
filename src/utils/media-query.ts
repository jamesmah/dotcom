import { Breakpoint, Theme } from "../theme"

interface ThemeProps {
  theme?: Theme
}

const up = (key: number | Breakpoint) => (props?: ThemeProps) => {
  const breakpoints = props?.theme?.breakpoints
  if (!breakpoints) return `&`
  return `@media (min-width:${
    typeof key === `number` ? key : breakpoints[key] + 0.02
  }px)`
}

const down = (key: number | Breakpoint) => (props?: ThemeProps) => {
  const breakpoints = props?.theme?.breakpoints
  if (!breakpoints) return `&`
  return `@media (max-width:${
    typeof key === `number` ? key : breakpoints[key]
  }px)`
}

const between =
  (start: number | Breakpoint, end: number | Breakpoint) =>
  (props?: ThemeProps) => {
    const breakpoints = props?.theme?.breakpoints
    if (!breakpoints) return `&`
    return (
      `@media (min-width:${
        typeof start === `number` ? start : breakpoints[start] + 0.02
      }px) and ` +
      `(max-width:${typeof end === `number` ? end : breakpoints[end]}px)`
    )
  }

const only = (key: Breakpoint) => (props?: ThemeProps) => {
  const breakpoints = props?.theme?.breakpoints
  if (!breakpoints) return `&`
  const keys = Object.keys(breakpoints) as Breakpoint[]
  if (keys.indexOf(key) + 1 < keys.length) {
    return between(key, keys[keys.indexOf(key) + 1])
  }
  return up(key)
}

const horizontal = () => `@media (min-aspect-ratio: 10000/10000)`
const vertical = () => `@media (max-aspect-ratio: 9999/10000)`

export const mq = {
  up,
  down,
  between,
  only,
  horizontal,
  vertical,
}
