import { lazy } from "react"
import { ArticleData, Category } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `the-better-way-to-style-your-react-components`,
  timeStamp: new Date(`2021-10-25T09:54:16.735Z`),
  category: Category.Dev,
  title: `The Better Way To Style Your React Components`,
  quote: ``,
  image,
  excerpt: (
    <>
      There are probably too many ways to style your React components, and if
      you haven't had enough of them, here's yet another one to add to your
      list. It is far from being mainstream but might just be perfect for your
      smaller projects.
    </>
  ),
  Page: lazy(() => import(`./Page`)),
}

export default data
