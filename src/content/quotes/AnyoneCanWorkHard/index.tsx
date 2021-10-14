import { lazy } from "react"
import { QuoteData } from "../../../types"
import image from "./image.jpg"

const data: QuoteData = {
  slug: `anyone-can-work-hard-when-they-feel-motivated`,
  timeStamp: new Date(`2021-10-12T10:26:18.737Z`),
  quoteText: (
    <>
      Anyone can work hard when they feel motivated. It’s the ability to keep
      going when work isn’t exciting that makes the difference
    </>
  ),
  image,
  Page: lazy(() => import(`./Page`)),
}

export default data
