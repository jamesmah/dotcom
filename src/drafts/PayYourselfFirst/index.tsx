import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `pay-yourself-first`,
  timeStamp: new Date(`2023-01-19T08:11:19.422Z`),
  tags: [Tag.Growth],
  title: `Pay yourself first.`,
  quote: ``,
  originator: ``,
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
