import { Link } from "react-router-dom"
import Container from "../components/elements/Container"
import Stack from "../components/elements/Stack"
import Quote from "../components/molecules/Quote"
import allArticles from "../content/allArticles"
import { Tag } from "../types"

const Quotes = () => {
  const allQuotes = allArticles.filter((article) =>
    article.tags.some((tag) => tag === Tag.Quote)
  )

  return (
    <Container>
      <Stack gap={`2rem`}>
        {allQuotes.map((quote, index) => (
          <Quote
            data={quote}
            key={quote.slug}
            textAlign={index % 2 === 0 ? `right` : `left`}
          />
        ))}
      </Stack>
      <Stack
        css={`
          padding: 4rem 0 4rem;
          align-items: flex-end;
        `}
      >
        <div data-aos={`fade-right`} data-aos-offset={0}>
          <Link
            css={`
              margin: 0 2rem;
              font-size: 1.25rem;
            `}
            to={`/blog#top`}
          >
            Go to Blog ❯
          </Link>
        </div>
      </Stack>
    </Container>
  )
}

export default Quotes
