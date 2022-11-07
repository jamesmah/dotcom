import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `if-you-want-better-results`,
  timeStamp: new Date(`2022-11-08T09:41:09.133Z`),
  tags: [Tag.Growth],
  title: `If you want better results, forget about setting goals (WIP)`,
  quote: ``,
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
