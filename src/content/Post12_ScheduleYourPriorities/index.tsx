import { lazy } from "react"
import { ArticleData, Category } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `schedule-your-priorities`,
  timeStamp: new Date(`2021-11-07T08:04:02.427Z`),
  category: Category.Quote,
  title: ``,
  quote: (
    <>
      The key is not to prioritize what's on your schedule, but to schedule your
      priorities.
    </>
  ),
  image,
  imageDetails: {
    author: {
      name: `Giallo`,
      link: `https://www.pexels.com/@giallo`,
    },
    link: `https://www.pexels.com/photo/assorted-silver-colored-pocket-watch-lot-selective-focus-photo-859895/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
