import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"
import { Breakpoint } from "../../theme"
import { fadeAnimation } from "../../utils/keyframes"
import Container from "../elements/Container"

const StyledDiv = styled.div`
  margin: 1rem 0 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.light[2]};

  :hover {
    color: ${({ theme }) => theme.palette.light[1]};
  }
`

const BackHeader = ({ width }: { width?: Breakpoint }) => {
  const history = useHistory()
  const useBrowserBack = history.action !== `POP`

  return (
    <Container
      $width={width}
      css={`
        display: flex;
        animation: ${fadeAnimation} 1s ease;
      `}
    >
      <StyledDiv
        as={useBrowserBack ? undefined : Link}
        onClick={useBrowserBack ? history.goBack : undefined}
        to={(useBrowserBack ? undefined : `/`) as string}
      >
        ❮ Back
      </StyledDiv>
    </Container>
  )
}

export default BackHeader
