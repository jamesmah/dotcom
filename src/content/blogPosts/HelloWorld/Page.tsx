import chroma from "chroma-js"
import { css } from "styled-components"
import ImageAuthor from "../../../components/elements/ImageAuthor"
import Stack from "../../../components/elements/Stack"
import data from "."

const Page = () => {
  return (
    <Stack gap="1rem">
      <div
        css={`
          display: flex;
          justify-content: space-between;
        `}
      >
        <div data-aos="fade">{data.timeStamp.toDateString()}</div>
        <Stack direction="row" gap="1rem">
          {data.tags.map((tag, index, array) => (
            <div
              data-aos="fade-right"
              data-aos-delay={(array.length - index - 1) * 100}
              key={tag}
              css={css`
                color: ${({ theme }) => theme.palette.light[2]};
                background: ${({ theme }) =>
                  chroma(theme.palette.dark[3]).alpha(0.8).hex()};
                font-size: 0.75rem;
                padding: 0.125rem 0.375rem;
                border-radius: 0.5rem;
                text-transform: uppercase;
                font-weight: 600;
              `}
            >
              {tag}
            </div>
          ))}
        </Stack>
      </div>

      <h3 data-aos="fade" data-aos-delay="100">
        {data.title}
      </h3>

      <Stack gap="3rem">
        <ImageAuthor
          image={data.thumbnail}
          authorName={`Pixabay`}
          authorLink={`https://www.pexels.com/@pixabay`}
          imageLink={`https://www.pexels.com/photo/sky-earth-space-working-2156/`}
        />

        <div data-aos="fade-up" data-aos-offset="0">
          Welcome to the first post in my website blog. Hope to see you again in
          the future.
        </div>
      </Stack>
    </Stack>
  )
}

export default Page
