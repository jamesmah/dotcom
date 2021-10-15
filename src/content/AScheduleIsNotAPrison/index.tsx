import { lazy } from "react"
import { ArticleData } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  draft: true,
  slug: `a-schedule-is-not-a-prison`,
  timeStamp: new Date(`2021-10-11T10:26:18.737Z`),
  quote: (
    <>
      A schedule is not a prison. Set the schedule so that it is the day that
      you want. Set it up so it’s the best day you could have
    </>
  ),
  tags: [`Quote`],
  image,
  Page: lazy(() => import(`./Page`)),
}

export default data
