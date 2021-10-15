import { lazy } from "react"
import { ArticleData } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `there-isnt-time-so-brief-is-life`,
  timeStamp: new Date(`2021-10-15T00:19:16.790Z`),
  quote: (
    <>
      There isn’t time, so brief is life, for bickerings, apologies,
      heartburnings, callings to account. There is only time for loving, and but
      an instant, so to speak, for that.
    </>
  ),
  tags: [`Quote`],
  image,
  Page: lazy(() => import(`./Page`)),
}

export default data
