import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import ExternalLink from "../../components/molecules/ExternalLink"
import data from "."

const Page = () => (
  <PageContainer>
    <p>Challenges with goals</p>
    <h4>1. Winners and losers have the same goals</h4>
    <p>dsaffds asdf ds</p>
    <h4>2. Achieving a goal is only a momentary change</h4>
    <h4>3. Goals restrict your happiness</h4>
    <h4>4. Goals are at odds with long-term progress</h4>
    <p>FOcus on a system instead</p>
    <h4>Outcome-based habits vs identity based habits</h4>
    <ul>
      <li>The goal is not to read a book, it is to become a reader</li>
      <li>The goal is not to run a marathon, it is to become a runner</li>
      <li>
        The goal is not to learn an instrument, it is to become a musician
      </li>
    </ul>
    <br />
    <ExternalLink
      href={`https://www.goodreads.com/book/show/40121378-atomic-habits`}
      icon={`📚`}
    >
      Atomic Habits - James Clear
    </ExternalLink>
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
