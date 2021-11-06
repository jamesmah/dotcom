import { lazy } from "react"
import { ArticleData, Category } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `free-online-team-building-games`,
  timeStamp: new Date(`2021-11-05T21:46:52.327Z`),
  category: Category.None,
  title: `Free Online Team Building Games`,
  quote: ``,
  image,
  excerpt: (
    <>
      Here's some high quality online games for team building or just catching
      up with friends.
    </>
  ),
  Page: lazy(() => import(`./Page`)),
}

export default data
