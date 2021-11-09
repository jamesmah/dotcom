import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import data from "."

const Page = () => (
  <PageContainer>
    <ul>
      <li>Make it obvious</li>
      <li>Make it attractive</li>
      <li>Make it easy</li>
      <li>Make it satisfying</li>
    </ul>
    <br />
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
