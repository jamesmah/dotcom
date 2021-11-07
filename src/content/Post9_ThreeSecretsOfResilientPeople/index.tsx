import { lazy } from "react"
import { ArticleData, Category } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `three-secrets-of-resilient-people`,
  timeStamp: new Date(`2021-11-06T12:15:50.642Z`),
  category: Category.Growth,
  title: `Three Secrets Of Resilient People`,
  quote: ``,
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
