import { fadeAnimation, spinAnimation } from "../../utils/keyframes"

const Loader = ({ fadeDuration = 1 }: { fadeDuration?: number }) => (
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
        animation: ${fadeAnimation} ${fadeDuration}s ease;
      `}
    />
  </div>
)

export default Loader
