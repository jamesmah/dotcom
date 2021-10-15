import chroma from "chroma-js"
import { css } from "styled-components"
import Stack from "../elements/Stack"

const TagPills = ({ tags, ...props }: { tags: string[] }) => {
  return (
    <Stack direction={`row`} gap={`1rem`}>
      {tags.map((tag, index, array) => (
        <div
          {...props}
          key={tag}
          data-aos={`fade`}
          data-aos-delay={(array.length - index - 1) * 100}
          css={css`
            color: ${({ theme }) => theme.palette.light[2]};
            background: ${({ theme }) =>
              chroma(theme.palette.dark[3]).alpha(0.8).hex()};
            font-size: 0.75rem;
            padding: 0.125rem 0.375rem;
            border-radius: 0.5rem;
            font-weight: 600;
          `}
        >
          {tag}
        </div>
      ))}
    </Stack>
  )
}

export default TagPills
