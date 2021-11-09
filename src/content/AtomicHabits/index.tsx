import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `atomic-habits`,
  timeStamp: new Date(`2021-11-07T00:18:15.792Z`),
  tags: [Tag.Growth],
  title: `Atomic Habits`,
  quote: ``,
  originator: `James Clear`,
  image,
  imageDetails: {
    author: {
      name: `Gelgas Airlangga`,
      link: `https://www.pexels.com/@gelgas`,
    },
    link: `https://www.pexels.com/photo/shallow-focus-of-sprout-401213/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
