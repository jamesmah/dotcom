import { Link } from "react-router-dom"
import Container from "../components/elements/Container"
import Stack from "../components/elements/Stack"
import Quote from "../components/molecules/Quote"
import allArticles from "../content/allArticles"

const Home = () => {
  return (
    <Container>
      <Stack gap={`2rem`}>
        {allArticles
          .filter((article) => !article.draft && article.tags.includes(`Quote`))
          .map((quote, index) => (
            <Quote
              key={quote.slug}
              textAlign={index % 2 === 0 ? `right` : `left`}
              data={quote}
            />
          ))}
      </Stack>
      <Stack
        css={`
          padding: 4rem 0 4rem;
          align-items: flex-end;
        `}
      >
        <Link
          to={`blog#top`}
          data-aos={`fade-right`}
          data-aos-offset={0}
          css={`
            margin: 0 2rem;
            font-size: 1.25rem;
          `}
        >
          Go to Blog ❯
        </Link>
      </Stack>
    </Container>
  )
}

export default Home
