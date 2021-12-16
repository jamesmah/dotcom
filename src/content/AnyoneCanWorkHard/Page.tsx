import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import BlockQuote from "../../components/molecules/BlockQuote"
import ExternalLink from "../../components/molecules/ExternalLink"
import data from "."

const Page = () => (
  <PageContainer>
    <BlockQuote {...data} />
    <p>
      You don't need to make major changes to your life all at once to have a
      big impact. Rather, make tiny changes to your behavior, which, when
      repeated over and over, will become habits that may lead to big results.
    </p>
    <br />
    <h3>The Four Laws of Behavior Change</h3>
    <b>How to Create a Good Habit:</b>
    <h4>1. First Law - Make It Obvious</h4>
    <p>
      Make your cues as obvious as possible, and you'll be more likely to
      respond to them.
    </p>
    <p>
      We all have cues that trigger certain habits. Since certain stimuli can
      prompt habitual behavior, you can use this to change your habits. For
      example, you can change your environment to encourage better habits. If
      you want to exercise more often then leave your running shoes and gym
      clothes somewhere where you won’t miss them.
    </p>
    <p>
      If you want to eat healthier food, then put your cut vegetables on the
      shelf that you see as you open your fridge instead of hiding them in the
      vegetable drawer.
    </p>
    <h4>2. Second Law - Make It Attractive</h4>
    <p>
      Humans are motivated by the anticipation of reward, so making habits
      attractive will help you stick to them.
    </p>
    <p>
      Our brain releases dopamine (a hormone that makes us feel good) when we do
      activities that we enjoy. However, dopamine is also released when we
      anticipate these activities not only when we actually do them. That is why
      planning a vacation is so enjoyable and part of the fun.
    </p>
    <p>
      We can use this to our advantage when trying to form new habits. If we
      make a habit something we look forward to, we’ll be much more likely to
      follow through and actually do it. James Clear suggests using “temptation
      bundling” to do this. Temptation bundling is when you take a behavior that
      you want to adopt that is unappealing and link it to a behavior that you
      enjoy (one that will cause your brain to release dopamine). For example,
      make a decision that you will only watch TV in general or a specific
      program that you enjoy when you are on the treadmill.
    </p>
    <h4>3. Third Law - Make It Easy</h4>
    <p>
      If you want to build a new habit, make that habit as easy to adopt as
      possible.
    </p>
    <p>
      We will naturally gravitate toward the option that requires the least
      amount of work. Therefore, making behaviors as easy as possible is
      important to turn them into habits. Create an environment where doing the
      right thing is as easy as possible.
    </p>
    <p>
      If you want to do something, then make sure that the supplies are
      available so that there’s no friction involved in sending one. For
      example, if you want to go for a run, then keep your running gear out. If
      you don’t want to waste time on your phone, then don’t keep it nearby
      while you are working or simply turn it off. Doing so will introduce
      enough friction to ensure you only use it when you need to.
    </p>
    <p>
      This is another way to make any new activity feel manageable. The rule
      recognizes that simply getting started is the first and most important
      step toward doing something. If you want to start running then commit to
      running for two minutes only. Once you start running, you will probably
      keep going.
    </p>
    <h4>4. Fourth Law - Make It Satisfying</h4>
    <p>
      The most important rule for behavioral change is to make habits
      satisfying. This can be difficult since our habits are often beneficial in
      the long run and we don’t always get immediate satisfaction. For example,
      when we workout every day we will eventually get fitter but we don’t see
      the change every day. On the other hand, bad habits often do have
      immediate satisfaction such as the enjoyment from eating chocolate.
    </p>
    <p>
      Therefore, when you are trying to build habits with a long-term benefit,
      try to attach some immediate satisfaction to them. For example, if you
      want to start losing weight, start saving for something that you really
      want to buy. Each day that you eat well and/or workout put a dollar (or
      however much you decide on) into the savings account to save for something
      you really want. You will now get some short-term satisfaction each time
      you put money into your account. This will keep you on track until you
      reach your long-term goals.
    </p>
    <br />
    <b>How to Break a Bad Habit (inverse):</b>
    <h4>1. First Law - Make It Invisible</h4>
    <p>
      We all have cues that trigger certain habits. The buzz of your phone, for
      example, is a cue to check your messages. If you find yourself wasting a
      lot of time on social media or on your phone then move your phone away
      while you are working or put it on silent.
    </p>
    <h4>2. Second Law - Make It Unattractive</h4>
    <p>
      Focus on the benefits of avoiding your bad habits to make them seem
      unattractive. Habits are attractive when we associate them with positive
      feelings and unattractive when we associate them with negative feelings.
    </p>
    <h4>3. Third Law - Make It Difficult</h4>
    <p>
      Focus on increasing friction. For example, if you don’t want to waste time
      on your phone, then don’t keep it nearby while you are working or simply
      turn it off. Doing so will introduce enough friction to ensure you only
      use it when you need to.
    </p>
    <h4>4. Fourth Law - Make It Unsatisfying</h4>
    <p>
      The most important rule for behavioral change is to make bad habits
      unsatisfying. This can be difficult since bad habits often have immediate
      satisfaction such as the enjoyment from eating chocolate even if they are
      unsatisfying in the long run.
    </p>
    <p>
      Attach some immediate satisfaction to avoid a bad habit. For example, each
      day that you don’t do your bad habit, put a dollar (or however much you
      decide on) into a savings account. You will now get some short-term
      satisfaction each time you put money into your account. This will keep you
      on track until you reach your long-term goals.
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
