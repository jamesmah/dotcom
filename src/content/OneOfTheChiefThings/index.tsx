import { lazy } from "react"
import { ArticleData, Tag } from "../../types"
import image from "./image.jpg"

const data: ArticleData = {
  slug: `one-of-the-chief-things`,
  timeStamp: new Date(`2022-10-30T21:28:43.717Z`),
  tags: [Tag.Quote],
  title: ``,
  quote: (
    <>
      One of the chief things which my typical man has to learn is that the
      mental faculties are capable of a continuous hard activity; they do not
      tire like an arm or a leg. All they want is change - not rest, except in
      sleep.
    </>
  ),
  originator: `Arnold Bennett`,
  image,
  imageDetails: {
    author: {
      name: `Kateryna Babaieva`,
      link: `https://www.pexels.com/@kateryna-babaieva-1423213/`,
    },
    link: `https://www.pexels.com/photo/person-welding-wearing-a-prootective-metal-mask-3158651/`,
  },
  excerpt: ``,
  Page: lazy(() => import(`./Page`)),
}

export default data
