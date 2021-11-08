import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `non-violent-communication`,
  timeStamp: new Date(`2021-11-07T00:18:15.792Z`),
  tags: [Tag.Growth],
  title: `Non Violent Communication`,
  quote: ``,
  image,
  imageDetails: {
    author: {
      name: `Min An`,
      link: `https://www.pexels.com/@minan1398`,
    },
    link: `https://www.pexels.com/photo/monochrome-photo-of-couple-holding-hands-1004014/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
