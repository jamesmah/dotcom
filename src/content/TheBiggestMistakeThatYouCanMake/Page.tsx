import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import BlockQuote from "../../components/molecules/BlockQuote"
import ExternalLink from "../../components/molecules/ExternalLink"
import data from "."

const Page = () => (
  <PageContainer>
    <p>
      Stumbled upon this quote in the first chapter of the book Soft Skills: The
      Software Developer's Life Manual by Jon Sonmez. I highly recommend this
      book for any software engineer just starting out, or even a few years into
      the industry.
    </p>
    <BlockQuote
      {...data}
      quote={
        <>
          {data.quote} Job security is gone. The driving force of a career must
          come from the individual. Remember: Jobs are owned by the company, you
          own your career!
        </>
      }
    />
    <p>
      Limiting yourself on what you can achieve by giving yourself the excuse
      that something is "beyond your job scope or pay grade" is an attitude that
      can really set you back, especially early in your career. While there are
      probably many instances that it might technically be true, it shouldn't be
      your reason as an individual to not pursue the opportunity to do more. It
      can be a valid reason for your employer to want to prevent you from
      overstepping your role if it may cause more harm than good to the business
      though.
    </p>
    <p>
      If you aspire growth, treat working in a company not just as a place for
      you to trade your productivity for money, but also as a platform to
      develop your experience and achievements as an individual. Use David
      Goggin's cookie jar method (
      <ExternalLink
        href={`https://www.goodreads.com/book/show/41721428-can-t-hurt-me`}
        icon={`📚`}
      >
        <i>read more about it in his book 📚</i>
      </ExternalLink>
      ) and place all your growth and victories in there. Even when feel that
      you might not be receiving the recognition or compensation that you
      deserve, deliberate underperforming not only hurts your employer, but also
      hurts your own career. Choose to work hard, not solely for your company or
      your salary, but also for yourself.
    </p>
    <p>
      One of the best ways to get to where you want to be is to act like you are
      already there. It is very likely that if you step up, your company will
      take notice and give you that promotion. On the other hand, it is much
      harder for things to work out in the reverse order (get promotion first
      then step up), even though it is what most people expect from their
      employers. If you stand in their shoes, where would you find the
      confidence of knowing that your employee will do a good job in the new
      role without ever proving themselves first? However, if you find that your
      employer doesn't appreciate the work that you do even after some time, it
      might be a good time to move on. And bring that cookie jar with you.
    </p>
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
