import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `three-secrets-of-resilient-people`,
  timeStamp: new Date(`2021-11-06T12:15:50.642Z`),
  tags: [Tag.Growth],
  title: `Three Secrets Of Resilient People`,
  quote: ``,
  originator: `Lucy Hone`,
  image,
  imageDetails: {
    author: {
      name: `Oziel Gómez`,
      link: `https://www.pexels.com/@ozgomz`,
    },
    link: `https://www.pexels.com/photo/men-s-blue-leather-jacket-and-brown-backpack-868097/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
