import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import data from "."

const Page = () => (
  <PageContainer>
    <p>{data.excerpt}</p>
    <ImageAuthor image={data.image} imageDetails={data.imageDetails} />
  </PageContainer>
)

export default Page
