import { Category } from "../types"

export const getCategoryKey = (category: Category) =>
  Object.entries(Category).find(
    (entry) => category === entry[1]
  )?.[0] as keyof typeof Category

export const safeGetCategoryKey = (category: string) =>
  Object.entries(Category).find((entry) => category === entry[1])?.[0] as
    | keyof typeof Category
    | undefined
