import { css } from "styled-components"
import { Category } from "../../types"
import { safeGetCategoryKey } from "../../utils/category"
import Stack from "../elements/Stack"

const CategoryPills = ({ categories, ...props }: { categories: string[] }) => {
  return (
    <Stack direction={`row`} gap={`1rem`}>
      {categories
        .filter((category) => category && category !== Category.None)
        .map((category, index, array) => (
          <div
            {...props}
            css={css`
              color: ${({ theme }) => theme.palette.light[2]};
              background: ${({ theme }) => theme.palette.dark[2]};
              font-size: 0.75rem;
              padding: 0.125rem 0.375rem;
              border-radius: 0.5rem;
              font-weight: 600;
            `}
            data-aos={`fade`}
            data-aos-delay={(array.length - index - 1) * 100}
            key={index}
          >
            {safeGetCategoryKey(category) || category}
          </div>
        ))}
    </Stack>
  )
}

export default CategoryPills
