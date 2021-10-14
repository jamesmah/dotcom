/// <reference types="styled-components/cssprop" />

import { Theme } from "../theme"

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
