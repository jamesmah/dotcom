import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import BlockQuote from "../../components/molecules/BlockQuote"
import data from "."

const Page = () => (
  <PageContainer>
    <BlockQuote
      {...data}
      quote={
        <>
          {data.quote} Once we realize our strengths, we know where to spend our
          time and energy. We know which types of opportunities to look for and
          which types of challenges to avoid.
        </>
      }
    />
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
