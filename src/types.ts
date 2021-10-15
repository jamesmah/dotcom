import React, { LazyExoticComponent } from "react"

export const categories = [`Tech`, `Quote`] as const
export type Category = typeof categories[number]

export const categoryTitles: Record<string, string | undefined> = {
  Dev: `Software Development`,
  Motivation: `Motivation`,
  Quote: `Quotes`,
}

export interface ArticleData {
  draft?: boolean
  slug: string
  timeStamp: Date
  title?: React.ReactNode
  quote?: React.ReactNode
  category?: Category
  image: string
  excerpt?: React.ReactNode
  Page: LazyExoticComponent<() => JSX.Element>
}
