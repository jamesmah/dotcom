import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `pay-yourself-first`,
  timeStamp: new Date(`2022-12-19T08:27:13.202Z`),
  tags: [Tag.Growth],
  title: `Pay yourself first.`,
  quote: ``,
  originator: `Unknown`,
  image,
  imageDetails: {
    author: {
      name: `cottonbro studio`,
      link: `https://www.pexels.com/@cottonbro/`,
    },
    link: `https://www.pexels.com/photo/person-putting-coin-in-a-piggy-bank-3943716/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
