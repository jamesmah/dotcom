import { lazy } from "react"
import { ArticleData } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `hello-world`,
  timeStamp: new Date(`2021-10-12T11:05:17.766Z`),
  title: `Hello World!`,
  tags: [],
  image,
  excerpt: (
    <>
      Welcome to the first post on my website blog. Hope to see you again in the
      future.
    </>
  ),
  Page: lazy(() => import(`./Page`)),
}

export default data
