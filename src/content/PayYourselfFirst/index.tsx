import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `pay-yourself-first`,
  timeStamp: new Date(`2021-11-07T00:18:15.792Z`),
  tags: [Tag.Growth],
  title: `Pay Yourself First`,
  quote: ``,
  originator: `Robert Kiyosaki`,
  image,
  imageDetails: {
    author: {
      name: `cottonbro`,
      link: `https://www.pexels.com/@cottonbro`,
    },
    link: `https://www.pexels.com/photo/person-putting-coin-in-a-piggy-bank-3943716/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
