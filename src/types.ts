import React, { LazyExoticComponent } from "react"

export enum Tag {
  Dev = `Software Development`,
  Growth = `Personal Growth`,
  Ideas = `Ideas`,
  Quote = `Quotes`,
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
  tags: Tag[]
  title: React.ReactNode
  quote: React.ReactNode
  image: string
  imageDetails: ImageDetails
  excerpt: React.ReactNode
  Page: LazyExoticComponent<() => JSX.Element>
}
