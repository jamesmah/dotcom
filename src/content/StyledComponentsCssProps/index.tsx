import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `the-better-way-to-style-your-react-components`,
  timeStamp: new Date(`2021-10-25T09:54:16.735Z`),
  tags: [Tag.Dev],
  title: `The Better Way To Style Your React Components`,
  quote: ``,
  image,
  imageDetails: {
    author: {
      name: `Steve Johnson`,
      link: `https://www.pexels.com/@steve`,
    },
    link: `https://www.pexels.com/photo/multicolored-abstract-painting-1269968/`,
  },
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
