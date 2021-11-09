import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `anyone-can-work-hard-when-they-feel-motivated`,
  timeStamp: new Date(`2021-11-06T00:59:12.773Z`),
  tags: [Tag.Quote],
  title: ``,
  quote: (
    <>
      Anyone can work hard when they feel motivated. It's the ability to keep
      going when work isn't exciting that makes the difference.
    </>
  ),
  originator: `James Clear`,
  image,
  imageDetails: {
    author: {
      name: `Pixabay`,
      link: `https://www.pexels.com/@pixabay`,
    },
    link: `https://www.pexels.com/photo/brown-and-white-stallions-running-in-a-field-52500/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
