import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import data from "."

const Page = () => (
  <PageContainer>
    <h4>Break 1: Physical</h4>
    <p>
      This might include a walk around the block, walking the dog, going for a
      run, doing a workout video, jumping rope, doing some kettlebell exercises,
      or hustling up and down the stairs.
    </p>
    <h4>Break 2: Social</h4>
    <p>
      This could involve grabbing coffee with a colleague (or FaceTiming over a
      cup of coffee if you’re working virtually), having lunch with your partner
      and kids if they’re around, or calling a friend or family member you want
      to catch up with.
    </p>
    <h4>Break 3: Spiritual</h4>
    <p>
      Plenty of soulful activities can fit just fine into a workday: praying,
      meditating, reading spiritual texts or devotionals, listening to uplifting
      music, looking at something beautiful, or doing anything that connects you
      to something larger than yourself.
    </p>
    <br />
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
