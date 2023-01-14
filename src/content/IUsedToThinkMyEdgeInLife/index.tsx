import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `i-used-to-think-my-edge-in-life`,
  timeStamp: new Date(`2022-12-19T08:27:13.202Z`),
  tags: [Tag.Quote],
  title: ``,
  quote: (
    <>
      I used to think my edge in life was being smart, but it really isn't. My
      edge is being not stupid. There's a big difference.
    </>
  ),
  originator: `Warren Buffet`,
  image,
  imageDetails: {
    author: {
      name: `Burak The Weekender`,
      link: `https://www.pexels.com/@weekendplayer/`,
    },
    link: `https://www.pexels.com/photo/hanging-light-bulb-132340/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
