import { css } from "styled-components"
import Container from "../components/elements/Container"
import Stack from "../components/elements/Stack"

const Credits = () => {
  return (
    <Container
      css={`
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 5rem 0 10rem;
      `}
    >
      <Stack gap={`2rem`}>
        <h1 data-aos={`fade`}>Credits</h1>
        <Stack gap={`0.5rem`} data-aos={`fade-slide-up`} data-aos-delay={100}>
          <p>Theme</p>
          <div>
            •{` `}
            <a
              href={`https://open.cruip.com`}
              target={`_blank`}
              rel={`noreferrer`}
            >
              open.cruip.com
            </a>
            {` `}•
          </div>
        </Stack>
        <Stack gap={`0.5rem`} data-aos={`fade-slide-up`} data-aos-delay={100}>
          <p>Images</p>
          <div>
            •{` `}
            <a
              href={`https://www.pexels.com`}
              target={`_blank`}
              rel={`noreferrer`}
            >
              www.pexels.com
            </a>
            {` `}•
          </div>
        </Stack>
        <Stack gap={`0.5rem`} data-aos={`fade-slide-up`} data-aos-delay={`200`}>
          <p>Special thanks to</p>
          <p
            css={css`
              color: ${({ theme }) => theme.palette.light[1]};
            `}
          >
            ❤️&nbsp;&nbsp;Buer Buer
          </p>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Credits
