import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `breaks-to-take-every-day`,
  timeStamp: new Date(`2021-12-05T11:48:53.206Z`),
  tags: [Tag.Growth],
  title: `Four Breaks To Take Every Day`,
  quote: ``,
  originator: ``,
  image,
  imageDetails: {
    author: {
      name: `Tyler Lastovich`,
      link: `https://www.pexels.com/@lastly`,
    },
    link: `https://www.pexels.com/photo/person-standing-on-dock-with-water-396947/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
