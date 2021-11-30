import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import BlockQuote from "../../components/molecules/BlockQuote"
import data from "."

const Page = () => (
  <PageContainer>
    <BlockQuote {...data} />
    <p>
      Persistence and hard work are necessary to find success. But like anything
      else in life, overdoing it is counterintuitive, especially in the long
      run. When you push yourself too hard for too long, stress tends to pile
      up, and being overly tense usually works against giving your best
      performance. If you aren't striving and straining and operating at the
      very limit of your ability, you have room to think and adapt. You have
      room to evaluate the responses of and interact with the people around you.
    </p>
    <p>
      Things get worse when you start to deprive yourself of getting enough
      sleep. With comments such as "I can sleep when I'm dead" and "the most
      successful CEOs have only four hours' sleep", it has almost become a
      competition to see who can get away with the least amount of sleep. The
      lack of sleep makes you less focused and easily distracted. You become
      moody and less forgiving towards the people around you.
    </p>
    <p>
      Schedule your day so that you make most of your key decisions when you’re
      feeling the most refreshed. Perhaps early in the day before getting other
      work done, or within a two-hour block after you’ve had your coffee. Take
      frequent short breaks throughout the day and never burn the midnight oil
      if you don't have to.
    </p>
    <p>
      The key to success is finding the right balance between intensity, focus,
      and relaxation. You’ll find that over time you will be achieving much more
      even though you're not trying as hard.
    </p>
    <p>
      To explore further into this topic, here's a good read:
      <br />
      <a
        href={`https://www.goodreads.com/book/show/26271987-how-to-be-really-productive`}
        rel={`noreferrer`}
        target={`_blank`}
      >
        📚{` `}
        <i>
          How To Be Really Productive: Achieving Clarity and Getting Results in
          a World Where Work Never Ends
        </i>
      </a>
    </p>
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
