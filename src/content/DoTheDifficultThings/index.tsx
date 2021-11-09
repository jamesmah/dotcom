import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `do-the-difficult-things`,
  timeStamp: new Date(`2021-11-07T00:18:15.792Z`),
  tags: [Tag.Quote],
  title: ``,
  quote: (
    <>
      Do the difficult things while they are easy and do the great things while
      they are small. A journey of a thousand miles must begin with a single
      step.
    </>
  ),
  originator: `Lao Tzu`,
  image,
  imageDetails: {
    author: {
      name: `Marek Piwnicki`,
      link: `https://www.pexels.com/@marek-piwnicki-3907296`,
    },
    link: `https://www.pexels.com/photo/black-and-brown-wooden-staircase-8991527/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
