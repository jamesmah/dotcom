import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `cookie-jar`,
  timeStamp: new Date(`2021-11-07T00:18:15.792Z`),
  tags: [Tag.Growth],
  title: `Cookie Jar`,
  quote: ``,
  originator: `David Goggins`,
  image,
  imageDetails: {
    author: {
      name: `Lisa`,
      link: `https://www.pexels.com/@fotios-photos`,
    },
    link: `https://www.pexels.com/photo/photo-of-chocolate-cookies-in-jar-1476330/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
