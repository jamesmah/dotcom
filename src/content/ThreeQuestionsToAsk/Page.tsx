import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import data from "."

const Page = () => (
  <PageContainer>
    <ul>
      <li>How important is this task to the benefiter?</li>
      <li>Is there anyone else who can complete it?</li>
      <li>How could this task be accomplished if I had half as much time?</li>
    </ul>
    <br />
    <ImageAuthor image={data.image} imageDetails={data.imageDetails} />
  </PageContainer>
)

export default Page
