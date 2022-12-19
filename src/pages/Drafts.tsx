import { Fragment } from "react"
import { RouteComponentProps } from "react-router-dom"
import Container from "../components/elements/Container"
import Stack from "../components/elements/Stack"
import ArticlePreview from "../components/molecules/ArticlePreview"
import { allDrafts } from "../drafts/allDrafts"

const Drafts = ({ location }: RouteComponentProps) => (
  <Container
    $width={`md`}
    css={`
      padding-top: 1rem;
    `}
  >
    <Stack gap={`5rem`}>
      <h2>Drafts</h2>
      <Fragment key={location.search}>
        {allDrafts.map((article) => (
          <ArticlePreview article={article} key={article.slug} />
        ))}
      </Fragment>
    </Stack>
    <div
      css={`
        padding: 6rem 0;
        text-align: center;
      `}
    >
      •••
    </div>
  </Container>
)

export default Drafts
