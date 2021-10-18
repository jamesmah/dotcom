import { keyframes } from "styled-components"

const Loader = () => (
  <div
    css={`
      width: 6rem;
      height: 6rem;
      position: relative;
      filter: blur(1px);
      animation: ${spinAnimation} 2s linear infinite;
    `}
  >
    <div
      css={`
        border: 4px solid #717d86;
        border-width: 4px 0 0 0;
        border-radius: 50%;
        position: absolute;
        width: 100%;
        height: 100%;
        animation: ${opacityAnimation} 10s ease;
      `}
    />
  </div>
)

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const opacityAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export default Loader
