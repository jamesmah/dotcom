import ImageAuthor from "../../components/elements/ImageAuthor"
import Stack from "../../components/elements/Stack"
import data from "."

const Page = () => (
  <Stack
    css={`
      padding-top: 1rem;
    `}
    data-aos={`fade`}
    gap={`1rem`}
  >
    <p>
      Stumbled upon this quote in the first chapter of the book Soft Skills: The
      Software Developer's Life Manual by Jon Sonmez. I highly recommend this
      book for any software engineer just starting out, or even a few years into
      the industry.
    </p>
    <blockquote data-aos={`fade-right`}>
      <q>
        The biggest mistake that you can make is to believe that you are working
        for somebody else. Job security is gone. The driving force of a career
        must come from the individual. Remember: Jobs are owned by the company,
        you own your career!
      </q>
      {` `}- Earl Nightingale
    </blockquote>
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
      <a
        href={`https://www.goodreads.com/book/show/41721428-can-t-hurt-me`}
        rel={`noreferrer`}
        target={`_blank`}
      >
        <i>read more about it in his book</i>
      </a>
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
    <ImageAuthor image={data.image} imageDetails={data.imageDetails} />
  </Stack>
)

export default Page
