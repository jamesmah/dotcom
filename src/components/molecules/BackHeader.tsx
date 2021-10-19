import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"
import { Breakpoint } from "../../theme"
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
      `}
      data-aos={`fade`}
    >
      <StyledDiv
        as={useBrowserBack ? undefined : Link}
        onClick={useBrowserBack ? history.goBack : undefined}
        to={(useBrowserBack ? undefined : `/blog`) as string}
      >
        ❮ Back
      </StyledDiv>
    </Container>
  )
}

export default BackHeader
