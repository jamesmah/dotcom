import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import data from "."

const Page = () => (
  <PageContainer>
    <ul>
      <li>Make your home interesting</li>
      <li>
        Do what you enjoy, don’t waste your time on leisure activities you don’t
        enjoy
      </li>
      <li>Change your way of thinking, reinforce</li>
      <li>Safe space</li>
      <li>Muscle relaxation</li>
    </ul>
    <br />
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
