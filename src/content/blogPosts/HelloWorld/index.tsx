import { lazy } from "react"
import { BlogPostData } from "../../../types"
import thumbnail from "./thumbnail.jpg"

const data: BlogPostData = {
  slug: `hello-world`,
  timeStamp: new Date(`2021-10-12T11:05:17.766Z`),
  title: `Hello World!`,
  tags: [`general`, `life`],
  thumbnail,
  Excerpt: lazy(() => import(`./Excerpt`)),
  Page: lazy(() => import(`./Page`)),
}

export default data
