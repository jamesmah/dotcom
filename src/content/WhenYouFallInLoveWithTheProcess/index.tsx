import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `when-you-fall-in-love-with-the-process`,
  timeStamp: new Date(`2021-11-07T00:18:15.792Z`),
  tags: [Tag.Quote],
  title: ``,
  quote: (
    <>
      When you fall in love with the process rather than the product, you don’t
      have to wait to give yourself permission to be happy
    </>
  ),
  originator: `James Clear`,
  image,
  imageDetails: {
    author: {
      name: `Dennis Magati`,
      link: `https://www.pexels.com/@dennismagati`,
    },
    link: `https://www.pexels.com/photo/silhouette-of-four-people-against-sun-background-862848/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
