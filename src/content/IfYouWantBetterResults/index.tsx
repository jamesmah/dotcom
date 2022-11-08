import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `if-you-want-better-results`,
  timeStamp: new Date(`2022-11-08T06:19:23.090Z`),
  tags: [Tag.Growth],
  title: `If you want better results, forget about setting goals`,
  quote: ``,
  originator: `James Clear`,
  image,
  imageDetails: {
    author: {
      name: `Akil Mazumder`,
      link: `https://www.pexels.com/@akilmazumder/`,
    },
    link: `https://www.pexels.com/photo/person-holding-a-green-plant-1072824/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
