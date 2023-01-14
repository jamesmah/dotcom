import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import BlockQuote from "../../components/molecules/BlockQuote"
import data from "."

const Page = () => (
  <PageContainer>
    <BlockQuote {...data} />
    <p>
      We often find ourselves assuming that things that are urgent are also
      important. While instinctively is may seem logical, I did a little
      exercise writing out a list for each category.
    </p>
    <p>Things that are urgent:</p>
    <ul>
      <li>Catching the train to work</li>
      <li>Taking the clothes out of the wash</li>
      <li>Replying emails and texts</li>
      <li>Fixing the broken door knob</li>
    </ul>
    <p>Things that are important:</p>
    <ul>
      <li>Spending quality time with family and friends</li>
      <li>Growing a person by learning new skills or knowledge</li>
      <li>Building something meaningful that I can be proud of</li>
      <li>Contributing to society and making an impact</li>
    </ul>
    <p>
      You must be thinking, surely replying to emails and texts are part of
      connecting with friends and family, and I'll probably need clothes to wear
      to able to go out and do any of the things mentioned above. Focusing on
      things that are urgent compared to what's important may not have much
      difference in what you actually do in the short term, but may result in a
      significant difference of outcome in the long term.
    </p>
    <p>
      We can easily fall into the trap of believing that productivity equals
      progress. As we increase the efficiency of our schedules, we get better
      and better at doing more every day. It's easy to fill our schedules up
      with things that are urgent. There's always a little more chores to be
      done, something else in the house to fix, and work can seemingly be never
      end.
    </p>
    <p>
      Instead of thinking that if you could fit more into your schedule then you
      would make more time for things that you actually want to do, try
      approaching it from the other way around. Actively and regularly remind
      yourself of the things that are meaningful to you and make them your
      priorities. Put them into your schedule first and try to make your
      schedule work around them instead of trying to slot them in only when your
      schedule allows it.
    </p>
    <p>
      There will always be things that are seemingly urgent that come up
      regularly and frequently, that will constantly call out to you to be
      attended to. If we don't take control over what we allow into our
      schedule, it will slowly fill up itself without us being fully aware of
      what is actually happening.
    </p>
    <p>
      On a similar train of thought, think back to your past to see if you have
      done at least one of these below:
    </p>
    <ul>
      <li>
        Pick up the phone to respond to a text while you're having an actual
        face to face conversation with someone else
      </li>
      <li>
        Regularly read the news or go on social media to get the latest updates
        even during busy periods in your life
      </li>
      <li>
        Continuously work towards another raise or promotion at a job that you
        don't really enjoy and putting off applying for a new role or pursuing a
        new opportunity that is more meaningful.
      </li>
    </ul>
    <p>It's about time we took back control of our own lives.</p>
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
