import React, { LazyExoticComponent } from "react"

export enum Category {
  None = `No Category`,
  Dev = `Software Development`,
  Quote = `Quotes`,
  Motivation = `Motivation`,
}

export interface ArticleData {
  draft: boolean
  slug: string
  timeStamp: Date
  category: Category
  title: React.ReactNode
  quote: React.ReactNode
  image: string
  excerpt: React.ReactNode
  Page: LazyExoticComponent<() => JSX.Element>
}
