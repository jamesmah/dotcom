import { lazy } from "react"
import { QuoteData } from "../../../types"
import image from "./image.jpg"

const data: QuoteData = {
  slug: `there-isnt-time-so-brief-is-life`,
  timeStamp: new Date(`2021-10-10T10:26:18.737Z`),
  quoteText: (
    <>
      There isn’t time, so brief is life, for bickerings, apologies,
      heartburnings, callings to account. There is only time for loving, and but
      an instant, so to speak, for that
    </>
  ),
  image,
  Page: lazy(() => import(`./Page`)),
}

export default data
