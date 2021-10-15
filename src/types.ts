import React, { LazyExoticComponent } from "react"

export const tags = [`Tech`, `Quote`] as const
export type Tag = typeof tags[number]

export interface ArticleData {
  draft?: boolean
  slug: string
  timeStamp: Date
  title?: React.ReactNode
  quote?: React.ReactNode
  tags: Tag[]
  image: string
  excerpt?: React.ReactNode
  Page: LazyExoticComponent<() => JSX.Element>
}
