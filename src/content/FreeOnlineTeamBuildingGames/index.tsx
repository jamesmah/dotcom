import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `free-online-team-building-games`,
  timeStamp: new Date(`2021-11-05T21:46:52.327Z`),
  tags: [Tag.Ideas],
  title: `Free Online Team Building Games`,
  quote: ``,
  originator: ``,
  image,
  imageDetails: {
    author: {
      name: `Pavel Chernonogov`,
      link: `https://www.pexels.com/@watorious`,
    },
    link: `https://www.pexels.com/photo/man-welding-metal-bars-2381463/`,
  },
  excerpt: (
    <>
      Here's some high quality online games for team building or just catching
      up with friends.
    </>
  ),
  Page: lazy(() => import(`./Page`)),
}

export default data
