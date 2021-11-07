import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import data from "."

const Page = () => (
  <PageContainer>
    <blockquote data-aos={`fade-right`}>
      <q>{data.quote}</q>
    </blockquote>
    <ImageAuthor image={data.image} imageDetails={data.imageDetails} />
  </PageContainer>
)

export default Page
