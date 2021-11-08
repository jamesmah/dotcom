import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `the-last-mile`,
  timeStamp: new Date(`2021-11-07T00:18:15.792Z`),
  tags: [Tag.Quote, Tag.WIP],
  title: ``,
  quote: `The last mile is always the least crowded.`,
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
