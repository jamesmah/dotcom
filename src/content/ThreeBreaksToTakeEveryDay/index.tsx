import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `three-breaks-to-take-every-day`,
  timeStamp: new Date(`2021-11-07T22:30:48.422Z`),
  tags: [Tag.Growth],
  title: `Three Breaks To Take Every Day`,
  quote: ``,
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
