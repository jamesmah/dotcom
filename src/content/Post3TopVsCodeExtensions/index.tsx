import { lazy } from "react"
import { ArticleData, Category } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `top-visual-studio-code-extensions`,
  timeStamp: new Date(`2021-10-16T04:24:17.209Z`),
  category: Category.Dev,
  title: `My Top 10 Visual Studio Code Extensions`,
  quote: ``,
  image,
  excerpt: (
    <>
      Here’s my list of the most useful Visual Studio Code extensions that you
      can find today to improve your efficiency and productivity.
    </>
  ),
  Page: lazy(() => import(`./Page`)),
}

export default data
