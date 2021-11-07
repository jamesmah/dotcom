import React from "react"
import { fadeAnimation } from "../../utils/keyframes"
import Stack from "./Stack"

const PageContainer = ({ children }: { children?: React.ReactNode }) => (
  <Stack
    css={`
      padding-top: 1rem;
      animation: ${fadeAnimation} 1s ease;
    `}
    gap={`1rem`}
  >
    {children}
  </Stack>
)

export default PageContainer
