import { lazy } from "react"
import { ArticleData, Category } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `anyone-can-work-hard-when-they-feel-motivated`,
  timeStamp: new Date(`2021-11-06T00:59:12.773Z`),
  category: Category.Quote,
  title: ``,
  quote: (
    <>
      Anyone can work hard when they feel motivated. It's the ability to keep
      going when work isn't exciting that makes the difference.
    </>
  ),
  image,
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
