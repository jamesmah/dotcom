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
          {data.quote}
          <div>To do your best work, use the 85% rule</div>
          <div>Going fall throttle all the time actually works againt you</div>
          <div>
            When your mind is relaxed you're able to produce better, more
            thoughtful results.
          </div>
          <div>
            Identity what's essential and trim out the rest without making life
            difficult for others.
          </div>
          <div>
            Decline invitations to things that aren't good uses of,your time.
            Take breaks in your day - or in your career. Find ways to remind
            yourself to simply slow down.
          </div>
        </>
      }
    />
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
