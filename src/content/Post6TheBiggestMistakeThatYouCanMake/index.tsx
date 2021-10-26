import { lazy } from "react"
import { ArticleData, Category } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `the-biggest-mistake-that-you-can-make`,
  timeStamp: new Date(`2021-10-26T10:17:04.918Z`),
  category: Category.Quote,
  title: ``,
  quote: (
    <>
      The biggest mistake that you can make it to believe that you are working
      for somebody else.
    </>
  ),
  image,
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
