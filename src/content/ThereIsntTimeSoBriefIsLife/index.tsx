import { lazy } from "react"
import { ArticleData, Category } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  draft: false,
  slug: `there-isnt-time-so-brief-is-life`,
  timeStamp: new Date(`2021-10-15T00:19:16.790Z`),
  category: Category.Quote,
  title: ``,
  quote: (
    <>
      There isn’t time, so brief is life, for bickerings, apologies,
      heartburnings, callings to account. There is only time for loving, and but
      an instant, so to speak, for that.
    </>
  ),
  image,
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
