import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `genes-do-not-eliminate`,
  timeStamp: new Date(`2021-11-07T22:45:51.988Z`),
  tags: [Tag.Quote, Tag.WIP],
  title: ``,
  quote: (
    <>
      Genes do not eliminate the need for hard work. They clarify it. They tell
      us what to work hard on.
    </>
  ),
  image,
  imageDetails: {
    author: {
      name: `Kammeran Gonzalez-Keola`,
      link: `https://www.pexels.com/@kammeran-gonzalez-keola-3137381`,
    },
    link: `https://www.pexels.com/photo/unrecognizable-energetic-surfer-riding-azure-sea-wave-8258043/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
