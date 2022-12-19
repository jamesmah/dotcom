import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import BlockQuote from "../../components/molecules/BlockQuote"
import data from "."

const Page = () => (
  <PageContainer>
    <BlockQuote {...data} quote={<>{data.quote}</>} />
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
