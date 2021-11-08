import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `remember-why-you-started`,
  timeStamp: new Date(`2021-11-07T00:18:15.792Z`),
  tags: [Tag.Quote, Tag.WIP],
  title: ``,
  quote: (
    <>
      Remember why you started, remember where you’re headed, think of how great
      it will be to get there, and keep going.
    </>
  ),
  image,
  imageDetails: {
    author: {
      name: `Pixabay`,
      link: `https://www.pexels.com/@pixabay`,
    },
    link: `https://www.pexels.com/photo/green-tree-268533/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
