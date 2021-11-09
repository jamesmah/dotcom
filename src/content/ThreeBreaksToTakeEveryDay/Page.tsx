import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import data from "."

const Page = () => (
  <PageContainer>
    <ul>
      <li>Physical</li>
      <li>Social</li>
      <li>Spiritual</li>
    </ul>
    <br />
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
