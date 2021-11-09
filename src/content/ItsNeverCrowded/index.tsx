import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `its-never-crowded`,
  timeStamp: new Date(`2021-11-07T00:18:15.792Z`),
  tags: [Tag.Quote],
  title: ``,
  quote: `It's never crowded along the extra mile.`,
  originator: `Wayne Dyer`,
  image,
  imageDetails: {
    author: {
      name: `Eberhard Grossgasteiger`,
      link: `https://www.pexels.com/@eberhardgross`,
    },
    link: `https://www.pexels.com/photo/man-standing-on-top-of-rock-at-daytime-673018/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
