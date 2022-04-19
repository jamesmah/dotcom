import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `remember-why-you-started`,
  timeStamp: new Date(`2022-04-19T13:21:11.233Z`),
  tags: [Tag.Quote],
  title: ``,
  quote: (
    <>
      Remember why you started, remember where you're headed, think of how great
      it will be to get there, and keep going.
    </>
  ),
  originator: `Ralph Marston`,
  image,
  imageDetails: {
    author: {
      name: `Pixabay`,
      link: `https://www.pexels.com/@pixabay`,
    },
    link: `https://www.pexels.com/photo/road-landscape-nature-sky-56832/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
