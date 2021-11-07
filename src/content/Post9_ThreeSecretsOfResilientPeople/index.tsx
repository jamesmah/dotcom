import { lazy } from "react"
import { ArticleData, Category } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `three-secrets-of-resilient-people`,
  timeStamp: new Date(`2021-11-06T12:15:50.642Z`),
  category: Category.Motivation,
  title: `Three Secrets Of Resilient People`,
  quote: ``,
  image,
  imageDetails: {
    author: {
      name: `Анна Рыжкова`,
      link: `https://www.pexels.com/@1585669`,
    },
    link: `https://www.pexels.com/photo/person-rock-climbing-3077882/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
