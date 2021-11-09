import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import BlockQuote from "../../components/molecules/BlockQuote"
import data from "."

const Page = () => (
  <PageContainer>
    <BlockQuote {...data} />
    <p>
      Try coming up with not one, not two, but seven reasons why you want to
      accomplish your goal. And like always, don’t just think about it - write
      it down!
    </p>
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
