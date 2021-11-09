import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import data from "."

const Page = () => (
  <PageContainer>
    <ul>
      <li>Going full throttle all the time actually works against you.</li>
      <li>
        When you mind is relaxed, you’re able to produce better, more thoughtful
        results.
      </li>
      <li>
        Identify what’s essential and trim out the rest without making life
        difficult for others.
      </li>
      <li>
        Decline invitations to things that aren’t good uses of your time. Take
        breaks in your day - or in your career. Find ways to remind yourself to
        simply slow down.
      </li>
    </ul>
    <br />
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
