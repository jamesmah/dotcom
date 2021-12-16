import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `nonviolent-communication`,
  timeStamp: new Date(`2021-12-16T08:47:09.763Z`),
  tags: [Tag.Growth],
  title: `Nonviolent Communication`,
  quote: ``,
  originator: `Marshall B. Rosenberg`,
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
