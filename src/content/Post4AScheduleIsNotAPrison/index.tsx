import { lazy } from "react"
import { ArticleData, Category } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `a-schedule-is-not-a-prison`,
  timeStamp: new Date(`2021-10-11T10:26:18.737Z`),
  category: Category.Quote,
  title: ``,
  quote: (
    <>
      A schedule is not a prison. Set the schedule so that you have the day that
      you want. Set it up so it’s the best possible day you could have.
    </>
  ),
  image,
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
