import { Suspense } from "react"
import { RouteComponentProps } from "react-router"
import { css } from "styled-components"
import Container from "../components/elements/Container"
import Stack from "../components/elements/Stack"
import BackHeader from "../components/molecules/BackHeader"
import CategoryPills from "../components/molecules/CategoryPills"
import allArticles from "../content/allArticles"
import PageNotFound from "./PageNotFound"

const Article = ({ match }: RouteComponentProps<{ id: string }>) => {
  const article = allArticles.find((q) => q.slug === match.params.id)
  if (!article?.Page) return <PageNotFound />
  const { Page } = article

  return (
    <>
      <BackHeader width={`md`} />
      <Container $width={`md`}>
        <Stack gap={`1rem`}>
          <div
            css={`
              display: flex;
              justify-content: space-between;
            `}
          >
            <div
              data-aos={`fade`}
              css={css`
                color: ${({ theme }) => theme.palette.light[2]};
              `}
            >
              {article.timeStamp.toDateString()}
            </div>
            {article.category && (
              <CategoryPills categories={[article.category]} />
            )}
          </div>
          {article.title && <h3 data-aos={`fade`}>{article.title}</h3>}

          <Suspense fallback={null}>
            <Page />
          </Suspense>
        </Stack>
        <div
          css={`
            padding-bottom: 4rem;
          `}
        />
      </Container>
    </>
  )
}

export default Article
