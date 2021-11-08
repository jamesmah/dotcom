import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `three-questions-to-ask`,
  timeStamp: new Date(`2021-11-07T00:18:15.792Z`),
  tags: [Tag.Growth],
  title: `Three Questions To Ask To Increase Productivity`,
  quote: ``,
  image,
  imageDetails: {
    author: {
      name: `Chevanon Photography`,
      link: `https://www.pexels.com/@chevanon`,
    },
    link: `https://www.pexels.com/photo/close-up-of-coffee-cup-324028/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
