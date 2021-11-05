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
      What is the secret to happiness and health? It might be simpler than you
      think. There are many things that we think we want in life, such as fame,
      wealth, recognition, success. But have you ever noticed, that when we
      achieve some of those major life goals, we get ecstatic for just a brief
      moment? And before you know it we've moved on to the next thing.
    </p>
    <p>
      I have been lucky enough to have stumbled upon one of the most impactful
      TED talks that I've watched in my life. Presented by Robert Waldinger, a
      psychiatrist and Professor at Harvard Medical School. He shares his
      findings from the Grant Study, a longitudinal study on adult happiness
      that has been running continuously since 1938.
    </p>
    <p>
      The conclusion of the study is this.{` `}
      <i>Good relationships keep us happier and healthier</i>.
    </p>
    <p>Three important lessons learned from the study:</p>
    <ul className={`no-margin`}>
      <li>Social connections are good, loneliness kills</li>
      <li>Quality of your close relationships matters</li>
      <li>Close relationships protect our bodies and brains</li>
    </ul>
    <p>
      Besides having great relationships with family, friends and workmates, the
      happiest people are the ones who actively work towards building new
      relationships as they move towards different stages in their lives.
    </p>
    <p>At the end of the talk, Robert closes with a beautiful quote:</p>
    <blockquote data-aos={`fade-right`}>
      <q>{data.quote}</q> - Mark Twain
    </blockquote>
    <p>Click below to watch the full video:</p>
    <a
      href={`https://youtu.be/8KkKuTCFvzI`}
      rel={`noreferrer`}
      target={`_blank`}
    >
      🔗&nbsp;&nbsp;Robert Waldinger: What makes a good life? Lessons from the
      longest study on happiness | TED
    </a>
    <ImageAuthor
      authorLink={`https://www.pexels.com/@francesco-ungaro`}
      authorName={`Francesco Ungaro`}
      image={data.image}
      imageLink={`https://www.pexels.com/photo/hot-air-ballons-in-the-sky-2325446/`}
    />
  </Stack>
)

export default Page
