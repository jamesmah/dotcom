import { css } from "styled-components"
import { Tag } from "../../types"
import Stack from "../elements/Stack"

const tagEntries = Object.entries(Tag)
const tagValues = Object.values(Tag)

const TagPills = ({ tags }: { tags: Tag[] }) => (
  <Stack direction={`row`} gap={`1rem`}>
    {tags
      .slice()
      .sort((a, b) => tagValues.indexOf(a) - tagValues.indexOf(b))
      .map((tag, index, array) => (
        <div
          css={css`
            color: ${({ theme }) => theme.palette.light[2]};
            background: ${({ theme }) => theme.palette.dark[2]};
            font-size: 0.75rem;
            padding: 0.125rem 0.375rem;
            border-radius: 0.5rem;
            font-weight: 600;
          `}
          data-aos={`fade`}
          data-aos-delay={(array.length - index) * 100}
          key={index}
        >
          {tagEntries.find(([_, value]) => tag === value)?.[0]}
        </div>
      ))}
  </Stack>
)

export default TagPills
