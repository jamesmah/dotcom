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
  imageDetails: {
    author: {
      name: `José Oliveira`,
      link: `https://www.pexels.com/@jose-oliveira-32884059`,
    },
    link: `https://www.pexels.com/photo/wood-landscape-water-summer-7028840/`,
  },
  excerpt: (
    <>
      Here's my list of the most useful Visual Studio Code extensions that you
      can find today to improve your efficiency and productivity for frontend
      web development.
    </>
  ),
  Page: lazy(() => import(`./Page`)),
}

export default data
