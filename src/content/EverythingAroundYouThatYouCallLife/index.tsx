import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `everything-around-you-that-you-call-life`,
  timeStamp: new Date(`2021-12-16T08:58:06.831Z`),
  tags: [Tag.Quote],
  title: ``,
  quote: (
    <>
      Everything around you that you call life was made up by people that were
      no smarter than you. And you can change it, you can influence it… Once you
      learn that, you'll never be the same again.
    </>
  ),
  originator: `Steve Jobs`,
  image,
  imageDetails: {
    author: {
      name: `Pixabay`,
      link: `https://www.pexels.com/@pixabay`,
    },
    link: `https://www.pexels.com/photo/planet-earth-220201/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
