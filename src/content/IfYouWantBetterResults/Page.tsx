import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import ExternalLink from "../../components/molecules/ExternalLink"
import data from "."

const Page = () => (
  <PageContainer>
    <p>
      It is common advice for us to set some goals early and work towards them
      as a path to success. The downsides of goal setting are not discussed
      enough, and here are some of them:
    </p>
    <h4>1. Winners and losers have the same goals</h4>
    <p>
      Even though many people with goals succeed, not everyone will. 90% of
      startups fail, and I would bet that most of them have set some goals at
      the start.
    </p>
    <h4>2. Achieving a goal is only a momentary change</h4>
    <p>
      The instance of achieving a goal is usually a fleeting moment, for
      example: crossing the finish line, hitting 1 million subscribers. The
      journey may have taken years or even decades
    </p>
    <h4>3. Goals restrict your happiness</h4>
    <p>
      It is a constant reminder that we have not achieved "success". If we let
      achievements define who we are, our happiness is conditional and
      quantifiable.
    </p>
    <h4>4. Goals are at odds with long-term progress</h4>
    <p>
      Goals can be used as a reason to "reward" yourself by taking a break.
      Sometimes these breaks become long and extended, which makes it much
      harder to get back into it
    </p>
    <br />
    <br />
    <h4>Outcome-based habits vs identity based habits</h4>
    <ul>
      <li>The goal is not to read a book, it is to become a reader</li>
      <li>The goal is not to run a marathon, it is to become a runner</li>
      <li>
        The goal is not to learn an instrument, it is to become a musician
      </li>
    </ul>
    <p>
      Instead of putting goals at the forefront, focus on a system or routine.
      Goals can be useful when used correctly, but realise that focusing on the
      present is usually more beneficial than focusing on the future.
      Circumstances change frequently and so will our goals, and in many ways
      our journeys shape our goals rather than the other way around.
    </p>
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
