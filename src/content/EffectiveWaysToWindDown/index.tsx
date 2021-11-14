import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `effective-ways-to-wind-down`,
  timeStamp: new Date(`2021-11-14T20:45:16.404Z`),
  tags: [Tag.Growth],
  title: `Effective Ways To Wind Down`,
  quote: ``,
  originator: ``,
  image,
  imageDetails: {
    author: {
      name: `Pixabay`,
      link: `https://www.pexels.com/@pixabay`,
    },
    link: `https://www.pexels.com/photo/green-tree-268533/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
