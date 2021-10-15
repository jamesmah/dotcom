import { Link, useHistory } from "react-router-dom"
import { css } from "styled-components"
import { Breakpoint } from "../../theme"
import Container from "../elements/Container"

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
      {useBrowserBack ? (
        <div
          onClick={history.goBack}
          css={css`
            margin: 1rem 0 2rem;
            cursor: pointer;
            display: flex;
            align-items: center;

            :hover {
              color: ${({ theme }) => theme.palette.light[1]};
            }
          `}
        >
          ❮ Back
        </div>
      ) : (
        <Link
          to={`/blog`}
          css={css`
            margin: 1rem 0 2rem;
            cursor: pointer;
            display: flex;
            align-items: center;

            :hover {
              color: ${({ theme }) => theme.palette.light[1]};
            }
          `}
        >
          ❮ Back
        </Link>
      )}
    </Container>
  )
}

export default BackHeader
