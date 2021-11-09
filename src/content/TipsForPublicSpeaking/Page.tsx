import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import data from "."

const Page = () => (
  <PageContainer>
    <ul>
      <li>Set the bar high</li>
      <li>Look before you talk</li>
    </ul>
    <br />
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
