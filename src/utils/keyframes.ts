import { keyframes } from "styled-components"

export const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const fadeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const fadeDownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-16px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const fadeLeftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(16px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`
