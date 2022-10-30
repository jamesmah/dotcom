import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import BlockQuote from "../../components/molecules/BlockQuote"
import data from "."

const Page = () => (
  <PageContainer>
    <BlockQuote {...data} />
    <p>
      There are many articles and books that emphasize the importance of rest
      and recovery. However they don't always necessarily mean doing nothing and
      just relaxing. Some teach meditation and mindfullness which can be viewed
      as "training" of the mind. Others encourage carving out time to do things
      that you really enjoy at least once a day.
    </p>
    <p>
      Unlike taking a rest from physical activites, "resting" the mind isn't as
      straighforward. Somehow binging on Netflix, scrolling through social media
      or napping for hours don't make us feel more refreshed or energised, and
      can make us feel depleted instead.
    </p>
    <p>
      When you seem to feel exhausted from seemingly regular tasks, don't always
      find relief just by taking more breaks. Try actively changing your
      approach and through some trial and error you will likely find an
      abundance of energy you never though you had.
    </p>
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page

// I’ve read many articles over the years emphasizing the importance of downtime, of relaxing, and sometimes “turning off your brain” (possibly my translation, but either way, definitely a phrase I’ve heard).

// However, I ran across the following in the book “How to Live on 24 Hours a Day” by Arnold Bennett: “One of the chief things which my typical man has to learn is that the mental faculties are capable of continuous hard activity; they do not tire like an arm or a leg. All they want is change – not rest, except in sleep.”

// And personally, I’m beginning to believe that is true. While there are times when I just stop and watch something, I normally feel worse afterwards. Do I need a break from work? Certainly. But I should pivot to doing something else that exercises my mind and keeps me learning and growing, not stagnating.
