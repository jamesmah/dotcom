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
      The biggest mistake that you can make is to believe that you are working
      for somebody else.
    </>
  ),
  originator: `Earl Nightingale`,
  image,
  imageDetails: {
    author: {
      name: `Anders Kristensen`,
      link: `https://www.pexels.com/@andersbk`,
    },
    link: `https://www.pexels.com/photo/man-wearing-watch-with-hand-on-pocket-447570/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
