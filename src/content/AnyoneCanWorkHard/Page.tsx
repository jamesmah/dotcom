import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import BlockQuote from "../../components/molecules/BlockQuote"
import data from "."

const Page = () => (
  <PageContainer>
    <BlockQuote {...data} />
    <ul>
      <li>Make it obvious</li>
      <li>Make it attractive</li>
      <li>Make it easy</li>
      <li>Make it satisfying</li>
    </ul>
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
