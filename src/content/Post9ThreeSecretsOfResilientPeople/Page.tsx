import Loader from "../../components/elements/Loader"
import Stack from "../../components/elements/Stack"

const Page = () => {
  return (
    <Stack
      css={`
        padding-top: 1rem;
      `}
      data-aos={`fade`}
      gap={`1rem`}
    >
      <ol>
        <li>
          Resilient people get that shit happens
          <ul>
            <li>Accept that suffering is part of life</li>
          </ul>
        </li>
        <li>
          Resilient people are good at choosing where they select their
          attention
          <ul>
            <li>Focus on things they can change</li>
            <li>Accept things that they cannot change</li>
          </ul>
        </li>
        <li>
          Resilient people ask themselves is what I’m doing helping or harming
          me
          <ul>
            <li>Be kind to yourself</li>
          </ul>
        </li>
      </ol>
      <br />
      <div
        css={`
          position: relative;
          padding-bottom: 56.25%;
        `}
      >
        <div
          css={`
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
          `}
        >
          <Loader />
        </div>
        <iframe
          allowFullScreen
          css={`
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
          `}
          frameBorder={`0`}
          scrolling={`no`}
          src={`https://embed.ted.com/talks/lucy_hone_3_secrets_of_resilient_people`}
        />
      </div>
    </Stack>
  )
}

export default Page
