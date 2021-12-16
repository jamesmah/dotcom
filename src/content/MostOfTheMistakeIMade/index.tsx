import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `most-of-the-mistakes-i-made`,
  timeStamp: new Date(`2021-11-30T19:58:21.940Z`),
  tags: [Tag.Quote],
  title: ``,
  quote: (
    <>
      Most of the mistakes I made, I made when I was too tired, because I tried
      too hard and worked too hard. You make better decisions when you're not
      too tired. So that would be my only advice.
    </>
  ),
  originator: `Bill Clinton to Obama`,
  image,
  imageDetails: {
    author: {
      name: `Martins Krastins`,
      link: `https://www.pexels.com/@martinskrastins`,
    },
    link: `https://www.pexels.com/photo/cracked-stone-wall-838981/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
