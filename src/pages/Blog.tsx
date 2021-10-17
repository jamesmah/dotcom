import queryString from "query-string"
import { Fragment } from "react"
import { Link, RouteComponentProps } from "react-router-dom"
import { css } from "styled-components"
import Container from "../components/elements/Container"
import Image from "../components/elements/Image"
import Stack from "../components/elements/Stack"
import CategoryPills from "../components/molecules/CategoryPills"
import allArticles from "../content/allArticles"
import { Category } from "../types"

const Blog = ({ location }: RouteComponentProps) => {
  const parsed = queryString.parse(location.search)
  const selectedCategory = parsed.category

  return (
    <Container
      $width={`md`}
      css={`
        padding-top: 1rem;
      `}
    >
      <Stack gap={`5rem`}>
        <Stack gap={`1rem`}>
          <h1 data-aos={`fade`}>
            {(typeof selectedCategory === `string` &&
              Object.values(Category).find((c) => c === selectedCategory)) ||
              `All Articles`}
          </h1>

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
              className={selectedCategory ? undefined : `active`}
              to={queryString.stringifyUrl(
                {
                  url: location.pathname,
                  query: { ...parsed, category: undefined },
                },
                {
                  arrayFormat: `comma`,
                }
              )}
              data-aos={`fade-left`}
            >
              All
            </Link>
            {Object.entries(Category)
              .filter(
                ([key, category]) =>
                  category !== Category.None &&
                  allArticles.some((article) => category === article.category)
              )
              .map(([key, category], index) => (
                <Fragment key={key}>
                  <div
                    data-aos={`fade-left`}
                    data-aos-delay={(index * 2 + 1) * 50}
                  >
                    |
                  </div>
                  <Link
                    data-aos={`fade-left`}
                    data-aos-delay={(index + 1) * 2 * 50}
                    className={
                      selectedCategory === category ? `active` : undefined
                    }
                    to={queryString.stringifyUrl({
                      url: location.pathname,
                      query: { ...parsed, category: category },
                    })}
                  >
                    {key}
                  </Link>
                </Fragment>
              ))}
          </div>
        </Stack>

        <Fragment key={location.search}>
          {allArticles
            .filter(
              (article) =>
                (parsed.draft || parsed.draft === null || !article.draft) &&
                (!selectedCategory || article.category === selectedCategory)
            )
            .map((article) => (
              <Stack
                key={article.slug}
                id={article.slug}
                gap={`0.5rem`}
                data-aos={`fade`}
                data-aos-offset={100}
              >
                <div
                  css={`
                    display: flex;
                    justify-content: space-between;
                  `}
                >
                  <div
                    css={css`
                      color: ${({ theme }) => theme.palette.light[2]};
                    `}
                  >
                    {article.timeStamp.toDateString()}
                  </div>
                  <CategoryPills
                    categories={[
                      article.draft ? `Draft` : ``,
                      article.category || ``,
                    ].filter(Boolean)}
                  />
                </div>

                {article.title && (
                  <h3>
                    <Link
                      to={`article/${article.slug}#top`}
                      css={css`
                        color: ${({ theme }) => theme.palette.light[1]};
                      `}
                    >
                      {article.title}
                    </Link>
                  </h3>
                )}

                {article.quote && (
                  <Link
                    to={`article/${article.slug}#top`}
                    css={css`
                      color: ${({ theme }) => theme.palette.light[1]};
                    `}
                  >
                    <blockquote>
                      <q>{article.quote}</q>
                    </blockquote>
                  </Link>
                )}

                <Link to={`article/${article.slug}#top`}>
                  <div
                    css={`
                      position: relative;
                      padding-top: 40%;
                      overflow: hidden;
                    `}
                  >
                    <div
                      css={`
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      `}
                    >
                      <Image src={article.image} />
                    </div>
                  </div>
                </Link>

                {article.excerpt && <div>{article.excerpt}</div>}
                <div data-aos={`fade-left`} data-aos-offset={0}>
                  <Link to={`/article/${article.slug}#top`}>Read more ❯</Link>
                </div>
              </Stack>
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
