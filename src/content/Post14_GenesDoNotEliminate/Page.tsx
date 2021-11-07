import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import data from "."

const Page = () => (
  <PageContainer>
    <blockquote data-aos={`fade-right`}>
      <q>
        {data.quote} Once we realize our strengths, we know where to spend our
        time and energy. We know which types of opportunities to look for and
        which types of challenges to avoid.
      </q>
      {` `}- James Clear
    </blockquote>
    <ImageAuthor image={data.image} imageDetails={data.imageDetails} />
  </PageContainer>
)

export default Page
