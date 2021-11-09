import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import ExternalLink from "../../components/molecules/ExternalLink"
import data from "."

const Page = () => (
  <PageContainer>
    <p>
      Lucy Hone, resilience expert and researcher, reminds us that adversity
      doesn't discriminate. If you are alive, you are going to have to, or
      you've already had to, deal with some tough times. The amount of suffering
      people go through depend less on what challenges they face, but rather,
      {` `}
      <i>how</i> they face challenges in their lives. Here are the three most
      powerful mindsets to have in difficult moments:
    </p>
    <h4>1. Resilient people get that shit happens</h4>
    <p>
      Suffering is part of life. Some think that they are entitled to a happy
      and perfect life but the fact is terrible things happen to everyone. In a
      different light, it is suffering that has made us who we are, and it is
      suffering that reminds us of what we hold dear to our hearts. This doesn't
      mean you should actually welcome it in. Just accept the reality of things
      when they happen.
    </p>
    <h4>
      2. Resilient people are good at choosing where they select their attention
    </h4>
    <p>
      For most of us, it seems much easier to notice the negative, while
      positive emotions don't seem to last very long. Tuning in to the good
      takes practice and is an important skill to have when going through hard
      times. It isn't necessary to eliminate all negative thoughts, just
      remember to include the good ones as well. And when you have the capacity
      to take action, focus on the things that you can change and accept the
      things that you can't.
    </p>
    <h4>
      3. Resilient people ask themselves is what I’m doing helping or harming me
    </h4>
    <p>
      Ask yourself whether what you're doing, the way you're thinking, the way
      you're acting is helping or harming you. This is very powerful in many
      different contexts, all from the smallest to the biggest decisions you
      have to make. Even in the heat of the moment, asking yourself this puts
      you back in the driver's seat. It gives you some level of control and can
      prevent you from doing things you'll regret.
    </p>
    <p>
      These strategies don't necessarily remove the pain. They teach us how to
      accept it by embracing both the good and the bad that life throws at us.
      The best part is, these ways of thinking are pretty simple to learn and
      are readily available to us all, anytime, anywhere.
    </p>
    <ExternalLink
      href={`https://www.ted.com/talks/lucy_hone_3_secrets_of_resilient_people`}
    >
      Lucy Hone: 3 secrets of resilient people | TED Talk
    </ExternalLink>
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
