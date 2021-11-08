import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import data from "."

const Page = () => (
  <PageContainer>
    <blockquote data-aos={`fade-right`}>
      <q>
        When you grow up you tend to get told that the world is the way it is
        and your life is just to live your life inside the world. Try not to
        bash into the walls too much. Try to have a nice family life, have fun,
        save a little money. That's a very limited life. Life can be much
        broader once you discover one simple fact: {data.quote}
      </q>
      {` `}- Steve Jobs
    </blockquote>
    <ImageAuthor image={data.image} imageDetails={data.imageDetails} />
  </PageContainer>
)

export default Page
