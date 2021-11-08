import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import data from "."

const Page = () => (
  <PageContainer>
    <blockquote data-aos={`fade-right`}>
      <q>{data.quote}</q>
    </blockquote>
    <p>
      Try coming up with not one, not two, but seven reasons why you want to
      accomplish your goal. And like always, don’t just think about it - write
      it down!
    </p>
    <ImageAuthor image={data.image} imageDetails={data.imageDetails} />
  </PageContainer>
)

export default Page
