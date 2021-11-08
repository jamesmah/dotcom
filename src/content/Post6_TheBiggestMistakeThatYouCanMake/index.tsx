import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `the-biggest-mistake-that-you-can-make`,
  timeStamp: new Date(`2021-11-05T10:46:50.483Z`),
  tags: [Tag.Quote],
  title: ``,
  quote: (
    <>
      The biggest mistake that you can make it to believe that you are working
      for somebody else.
    </>
  ),
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
