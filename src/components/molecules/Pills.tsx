import { css } from "styled-components"
import Stack from "../elements/Stack"

const TagPills = ({ items, ...props }: { items: string[] }) => {
  return (
    <Stack direction={`row`} gap={`1rem`}>
      {items.map((item, index, array) => (
        <div
          {...props}
          key={index}
          data-aos={`fade`}
          data-aos-delay={(array.length - index - 1) * 100}
          css={css`
            color: ${({ theme }) => theme.palette.light[2]};
            background: ${({ theme }) => theme.palette.dark[2]};
            font-size: 0.75rem;
            padding: 0.125rem 0.375rem;
            border-radius: 0.5rem;
            font-weight: 600;
          `}
        >
          {item}
        </div>
      ))}
    </Stack>
  )
}

export default TagPills
