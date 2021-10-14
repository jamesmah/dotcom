import React, { LazyExoticComponent } from "react"

export interface QuoteData {
  slug: string
  timeStamp: Date
  image: string
  quoteText: React.ReactNode
  Page: LazyExoticComponent<() => JSX.Element>
}

export const tags = [`tech`, `life`, `general`] as const
export type Tag = typeof tags[number]

export interface BlogPostData {
  slug: string
  timeStamp: Date
  title: string
  tags: Tag[]
  thumbnail: string
  Excerpt: LazyExoticComponent<() => JSX.Element>
  Page: LazyExoticComponent<() => JSX.Element>
}
