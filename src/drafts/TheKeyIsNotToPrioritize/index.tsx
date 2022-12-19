import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `the-key-is-not-to-prioritize`,
  timeStamp: new Date(`2022-12-19T08:27:13.202Z`),
  tags: [Tag.Quote],
  title: ``,
  quote: (
    <>
      The key is not to prioritize what's on your schedule, but to schedule your
      priorities.
    </>
  ),
  originator: `Stephen Covey`,
  image,
  imageDetails: {
    author: {
      name: `Sergij`,
      link: `https://www.pexels.com/@sergij-59618/`,
    },
    link: `https://www.pexels.com/photo/selective-photography-of-skeleton-key-hanging-217316/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
