import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import ExternalLink from "../../components/molecules/ExternalLink"
import data from "."

const Page = () => (
  <PageContainer>
    <h4>1. Make your home a safe space</h4>
    <p>
      Your home should be a place where you can relax and unwind, where you can
      find a sense of calm after accumulating stressors when you are out of the
      house. If you don't live alone, have an honest and open conversation with
      those you live with to set boundaries for a time or space for you to
      completely unwind without distractions.
    </p>
    <p>
      Ensure that your home gives you a sense of safety, both physically and
      emotionally. You could install security systems and stronger locks, hang
      photos of the people you care about in your life to remind yourself that
      you are loved or use a weighted blanket. Find what works for you.
    </p>
    <p>
      Define each room of the house based on its purpose. This is important
      whether you work from home or not. Set aside a safe space of any size to
      enhance the sense of calm when you enter this place. It is important to be
      clear about what activities are allowed in your safe space. As a strictly
      stress-free zone, no work or technology associated items or thoughts
      should enter this space. Your brain learns to associate certain areas with
      different mental states, giving you the ability to unwind when you need
      to.
    </p>
    <h4>2. Make your home interesting</h4>
    <p>
      The second step is to make each zone in your house appealing. It won't be
      very effective to have different zones if some of them are dull or
      unpleasant. Keep each room clean and fit for purpose. Display your
      favourite items and pictures up. Invest in good quality and aesthetically
      pleasing furniture. Use oil diffusers or candles in your safe space to
      promote relaxation. Indoor plants make your home greener, with the added
      bonus of filtering and purifying the air. Clean up your home and you will
      clean up your mind.
    </p>
    <h4>3. Do what you enjoy</h4>
    <p>
      Don’t waste your time on leisure activities you don’t enjoy. This might
      seem rather obvious but many of us simply conform to societal norms even
      when it comes to having fun. When we think of leisure activities, it would
      be common to go to the movies, have a meal at a restaurant or travel
      somewhere. It wouldn't be surprising if you came back from a two week
      vacation in Paris and didn't feel refreshed at all. Not everyone enjoys
      the same things, and you need to find what helps <i>you</i> unwind.
    </p>
    <p>
      If you haven't already found something that truly helps you relax, take
      some time to discover new activities. Maybe even try doing nothing at all.
      Create a true distinction between leisure and effort. For example, going
      out for drinks with friends might help some people recharge, but be tiring
      for others. This doesn't mean that the latter group of people don't get
      any enjoyment out of it. Just that for those who this group in particular,
      it is probably best for them to still find some other time to wind down
      too.
    </p>
    <h4>4. Progressive muscle relaxation</h4>
    <p>
      Progressive muscle relaxation is a simple practice of tensing and then
      releasing one muscle group at a time. Doing so can help relax your muscles
      and the mind. It only takes about 15 minutes a day and has been proven to
      decrease stress and anxiety when added to your daily routine. Here is a
      link to a video for guided progressive muscle relaxation:
    </p>
    <ExternalLink href={`https://www.youtube.com/watch?v=86HUcX8ZtAk`}>
      Progressive Muscle Relaxation
    </ExternalLink>
    <p>
      These techniques might work very well for some and less for others but the
      key point is that having the ability to wind down is vital if your goal is
      to increase productivity in a sustainable way. How your mind reacts to
      different activities and environments change over time so stay curious and
      take the time to learn what works for you.
    </p>
    <br />
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
