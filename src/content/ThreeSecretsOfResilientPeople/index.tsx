import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `three-secrets-of-resilient-people`,
  timeStamp: new Date(`2021-11-09T05:03:07.298Z`),
  tags: [Tag.Growth],
  title: `Three Secrets Of Resilient People`,
  quote: ``,
  originator: `Lucy Hone`,
  image,
  imageDetails: {
    author: {
      name: `Francesco Ungaro`,
      link: `https://www.pexels.com/@francesco-ungaro`,
    },
    link: `https://www.pexels.com/photo/grayscale-photo-of-gray-man-statue-96446/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
