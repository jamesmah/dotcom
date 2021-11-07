import React, { LazyExoticComponent } from "react"

export enum Category {
  None = `No Category`,
  Dev = `Software Development`,
  Quote = `Quotes`,
  Growth = `Personal Growth`,
  Ideas = `Ideas`,
}

export interface ImageDetails {
  author: {
    name: string
    link: string
  }
  link: string
}

export interface ArticleData {
  slug: string
  timeStamp: Date
  category: Category
  title: React.ReactNode
  quote: React.ReactNode
  image: string
  imageDetails: ImageDetails
  excerpt: React.ReactNode
  Page: LazyExoticComponent<() => JSX.Element>
}
