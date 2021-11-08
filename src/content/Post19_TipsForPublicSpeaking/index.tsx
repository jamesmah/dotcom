import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `tips-for-public-speaking`,
  timeStamp: new Date(`2021-11-07T00:18:15.792Z`),
  tags: [Tag.Growth, Tag.WIP],
  title: ` Tips For Public Speaking`,
  quote: ``,
  image,
  imageDetails: {
    author: {
      name: `freestocks.org`,
      link: `https://www.pexels.com/@freestocks`,
    },
    link: `https://www.pexels.com/photo/black-microphone-64057/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
