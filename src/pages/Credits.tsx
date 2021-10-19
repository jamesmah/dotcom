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
        <Stack data-aos={`fade-slide-up`} data-aos-delay={100} gap={`0.5rem`}>
          <p>Theme</p>
          <div>
            •{` `}
            <a
              href={`https://open.cruip.com`}
              rel={`noreferrer`}
              target={`_blank`}
            >
              open.cruip.com
            </a>
            {` `}•
          </div>
        </Stack>
        <Stack data-aos={`fade-slide-up`} data-aos-delay={100} gap={`0.5rem`}>
          <p>Images</p>
          <div>
            •{` `}
            <a
              href={`https://www.pexels.com`}
              rel={`noreferrer`}
              target={`_blank`}
            >
              www.pexels.com
            </a>
            {` `}•
          </div>
        </Stack>
        <Stack data-aos={`fade-slide-up`} data-aos-delay={`200`} gap={`0.5rem`}>
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
