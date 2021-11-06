import { lazy } from "react"
import { ArticleData, Category } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `free-online-team-building-games`,
  timeStamp: new Date(`2021-11-05T21:46:52.327Z`),
  category: Category.Leisure,
  title: `Free Online Team Building Games`,
  quote: ``,
  image,
  imageDetails: {
    author: {
      name: `Pixabay`,
      link: `https://www.pexels.com/@pixabay`,
    },
    link: `https://www.pexels.com/photo/close-up-photography-of-yellow-green-red-and-brown-plastic-cones-on-white-lined-surface-163064/`,
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
