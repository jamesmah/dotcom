import { lazy } from "react"
import { QuoteData } from "../../../types"
import image from "./image.jpg"

const data: QuoteData = {
  slug: `a-schedule-is-not-a-prison`,
  timeStamp: new Date(`2021-10-11T10:26:18.737Z`),
  quoteText: (
    <>
      A schedule is not a prison. Set the schedule so that it is the day that
      you want. Set it up so it’s the best day you could have
    </>
  ),
  image,
  Page: lazy(() => import(`./Page`)),
}

export default data
