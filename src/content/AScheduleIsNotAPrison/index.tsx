import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `a-schedule-is-not-a-prison`,
  timeStamp: new Date(`2021-10-21T10:26:18.737Z`),
  tags: [Tag.Quote],
  title: ``,
  quote: (
    <>
      A schedule is not a prison. Set the schedule so that you have the day that
      you want. Set it up so it's the best possible day you could have.
    </>
  ),
  originator: `Jordan Peterson`,
  image,
  imageDetails: {
    author: {
      name: `Daria Shevtsova`,
      link: `https://www.pexels.com/@daria`,
    },
    link: `https://www.pexels.com/photo/macbook-air-beside-notebook-and-camera-916335/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
