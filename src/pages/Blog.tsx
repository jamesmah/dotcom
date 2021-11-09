import queryString from "query-string"
import { Fragment } from "react"
import { Link, RouteComponentProps } from "react-router-dom"
import { css } from "styled-components"
import Container from "../components/elements/Container"
import Stack from "../components/elements/Stack"
import ArticlePreview from "../components/molecules/ArticlePreview"
import allArticles from "../content/allArticles"
import { Tag } from "../types"
import { fadeLeftAnimation } from "../utils/keyframes"

const Blog = ({ location }: RouteComponentProps) => {
  const parsed = queryString.parse(location.search)
  const selectedTagKey = typeof parsed.tag === `string` ? parsed.tag : undefined
  return (
    <Container
      $width={`md`}
      css={`
        padding-top: 1rem;
      `}
    >
      <Stack gap={`5rem`}>
        <Stack gap={`1rem`}>
          <div
            css={css`
              display: flex;
              gap: 1rem;
              color: ${({ theme }) => theme.palette.light[3]};
              flex-wrap: wrap;

              > a {
                color: inherit;

                &:hover {
                  color: ${({ theme }) => theme.palette.light[2]};
                }

                &.active {
                  color: ${({ theme }) => theme.palette.light[1]};
                }
              }
            `}
          >
            <Link
              className={selectedTagKey ? undefined : `active`}
              css={`
                opacity: 0;
                animation: ${fadeLeftAnimation} 1s ease forwards;
              `}
              to={queryString.stringifyUrl({
                url: location.pathname,
                query: { ...parsed, tag: undefined },
              })}
            >
              All
            </Link>
            {Object.entries(Tag)
              .filter(([_, tag]) =>
                allArticles.some((article) => article.tags.includes(tag))
              )
              .map(([tagKey, tag], index) => (
                <Fragment key={tagKey}>
                  <div
                    css={`
                      opacity: 0;
                      animation: ${fadeLeftAnimation} 1s ease
                        ${(index * 2 + 1) * 50}ms forwards;
                    `}
                  >
                    {index === 0 ? <Link to={`/drafts`}>|</Link> : `|`}
                  </div>
                  <Link
                    className={selectedTagKey === tagKey ? `active` : undefined}
                    css={`
                      opacity: 0;
                      animation: ${fadeLeftAnimation} 1s ease
                        ${(index + 1) * 2 * 50}ms forwards;
                    `}
                    to={queryString.stringifyUrl({
                      url: location.pathname,
                      query: { ...parsed, tag: tagKey },
                    })}
                  >
                    {tag}
                  </Link>
                </Fragment>
              ))}
          </div>
        </Stack>
        <Fragment key={location.search}>
          {allArticles
            .filter(
              (article) =>
                !selectedTagKey ||
                (typeof selectedTagKey === `string` &&
                  article.tags.some(
                    (tag) => tag === Tag[selectedTagKey as keyof typeof Tag]
                  ))
            )
            .map((article) => (
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
}

export default Blog
