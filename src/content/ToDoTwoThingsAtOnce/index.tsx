import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `to-do-two-things-at-once`,
  timeStamp: new Date(`2021-11-07T00:18:15.792Z`),
  tags: [Tag.Quote],
  title: ``,
  quote: `To do two things at once is to do neither`,
  originator: `Publius Syrus`,
  image,
  imageDetails: {
    author: {
      name: `Pixabay`,
      link: `https://www.pexels.com/@pixabay`,
    },
    link: `https://www.pexels.com/photo/railroad-tracks-in-city-258510/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
