import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import data from "."

const Page = () => (
  <PageContainer>
    <h4>1. Physical</h4>
    <p>
      Do some exercise. This might include walking around the block, jumping on
      a rebounder, going for a bike ride, or going to the gym. Aim for at least
      30 minutes a day.
    </p>
    <h4>2. Social</h4>
    <p>
      Have a conversation with someone, preferably in person or at least over a
      video call. Grab a coffee with a colleague, or go for brunch with a
      friend. Spend some family time with your partner and kids. Take part in a
      community or interest group.
    </p>
    <h4>3. Leisure</h4>
    <p>
      Do something you enjoy. Make some time to give yourself at least a tiny
      reward every day to do something you like. Play some games, read a book or
      watch some television. You might like gardening, or doing some woodwork.
    </p>
    <h4>4. Spiritual</h4>
    <p>
      Take this time to relax the mind and body. If you are religious, pray or
      read spiritual texts. Otherwise, you can meditate, listen to calming music
      or practice some breathing exercises. If none of these interest you,
      perhaps doing nothing for a moment or taking an afternoon nap are good
      alternatives too.
    </p>
    <br />
    <p>
      These breaks don't necessarily have to take up a lot of your time. And by
      scheduling these in, you can force yourself to take short breaks
      throughout the day, which is a great habit to get into. Also, some of
      these breaks can be combined. For example, you can play your favourite
      sport (physical + leisure) or meditate with your partner (social +
      spiritual). Be creative and take a break.
    </p>
    <br />
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
