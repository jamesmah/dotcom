import { lazy } from "react"
import { ArticleData, Category } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `hello-world`,
  timeStamp: new Date(`2021-10-12T11:05:17.766Z`),
  category: Category.None,
  title: `Hello World!`,
  quote: ``,
  image,
  imageDetails: {
    author: {
      name: `Pixabay`,
      link: `https://www.pexels.com/@pixabay`,
    },
    link: `https://www.pexels.com/photo/sky-earth-space-working-2156/`,
  },
  excerpt: (
    <>
      Welcome to the first post on my website blog. Hope to see you again in the
      future.
    </>
  ),
  Page: lazy(() => import(`./Page`)),
}

export default data
