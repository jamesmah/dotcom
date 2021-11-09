import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `there-isnt-time-so-brief-is-life`,
  timeStamp: new Date(`2021-10-15T00:19:16.790Z`),
  tags: [Tag.Quote],
  title: ``,
  quote: (
    <>
      There isn't time, so brief is life, for bickerings, apologies,
      heartburnings, callings to account. There is only time for loving, and but
      an instant, so to speak, for that.
    </>
  ),
  originator: `Mark Twain`,
  image,
  imageDetails: {
    author: {
      name: `Francesco Ungaro`,
      link: `https://www.pexels.com/@francesco-ungaro`,
    },
    link: `https://www.pexels.com/photo/hot-air-ballons-in-the-sky-2325446/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
