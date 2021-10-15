import { Breakpoint } from "../../theme"
import Container from "../elements/Container"

const Footer = ({ width }: { width?: Breakpoint }) => {
  return (
    <Container
      $width={width}
      as={`footer`}
      css={`
        padding: 6rem 0;
        text-align: center;
      `}
    >
      <div>•••</div>
    </Container>
  )
}

export default Footer
