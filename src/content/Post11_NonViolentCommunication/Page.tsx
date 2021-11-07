import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import data from "."

const Page = () => (
  <PageContainer>
    <ul>
      <li>
        When <u>A</u>, I feed <u>B</u>, because I am needing <u>C</u>.
        Therefore, now I would like <u>D</u>
      </li>
    </ul>
    <p>Use protective force</p>
    <ul>
      <li>
        Two questions to ask instead of punishment
        <ol>
          <li>What do I want this person to do?</li>
          <li>What do I want this person’s reasons to be for doing it?</li>
        </ol>
      </li>
    </ul>
    Expressing appreciation
    <ul>
      <li>Compliments are often judgements - however positive of others</li>
      <li>
        Saying thank you, state
        <ol>
          <li>The action that has contributed to our well being</li>
          <li>The particular need of ours that has been fulfilled</li>
          <li>The feelings of pleasure engendered as a result</li>
        </ol>
      </li>
    </ul>
    <ul>
      <li>
        It is not what you do that counts, it is the quality of your attention
      </li>
      <li>Don’t just do something, stand there</li>
      <li>
        In a group, much time is wasted when speakers aren’t certain what
        response they’re wanting
      </li>
      <li>Anything that is worth doing is worth doing poorly</li>
      <li>
        We are dangerous when we are not conscious of our responsibility for how
        we behave, think and feel
      </li>
    </ul>
    <br />
    <ImageAuthor image={data.image} imageDetails={data.imageDetails} />
  </PageContainer>
)

export default Page
