import React, { LazyExoticComponent } from "react"

export enum Tag {
  Quote = `Quotes`,
  Growth = `Growth`,
  Ideas = `Ideas`,
  Dev = `Dev`,
}

export interface ImageDetails {
  author: {
    name: string
    link: string
  }
  link: string
}

export interface ArticleData {
  draft?: boolean
  slug: string
  timeStamp: Date
  tags: Tag[]
  title: React.ReactNode
  quote: React.ReactNode
  originator: string
  image: string
  imageDetails: ImageDetails
  excerpt: React.ReactNode
  Page: LazyExoticComponent<() => JSX.Element>
}
