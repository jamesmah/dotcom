import queryString from "query-string"
import { Fragment } from "react"
import { Link, RouteComponentProps } from "react-router-dom"
import { css } from "styled-components"
import Container from "../components/elements/Container"
import Image from "../components/elements/Image"
import Stack from "../components/elements/Stack"
import CategoryPills from "../components/molecules/CategoryPills"
import allArticles, { allDrafts } from "../content/allArticles"
import { Category } from "../types"

const Blog = ({ location }: RouteComponentProps) => {
  const parsed = queryString.parse(location.search)
  const selectedCategory = parsed.category

  const articles =
    `draft` in parsed ? allDrafts.concat(allArticles) : allArticles

  return (
    <Container
      $width={`md`}
      css={`
        padding-top: 1rem;
      `}
    >
      <Stack gap={`5rem`}>
        <Stack gap={`1rem`}>
          {/* <h1 data-aos={`fade`}>
            {(typeof selectedCategory === `string` &&
              Object.values(Category).find((c) => c === selectedCategory)) ||
              `All Articles`}
          </h1> */}

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
              data-aos={`fade-left`}
              to={queryString.stringifyUrl(
                {
                  url: location.pathname,
                  query: { ...parsed, category: undefined },
                },
                {
                  arrayFormat: `comma`,
                }
              )}
            >
              All
            </Link>
            {Object.entries(Category)
              .filter(
                ([key, category]) =>
                  category !== Category.None &&
                  articles.some((article) => category === article.category)
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
                    className={
                      selectedCategory === category ? `active` : undefined
                    }
                    data-aos={`fade-left`}
                    data-aos-delay={(index + 1) * 2 * 50}
                    to={queryString.stringifyUrl({
                      url: location.pathname,
                      query: { ...parsed, category: category },
                    })}
                  >
                    {category}
                  </Link>
                </Fragment>
              ))}
          </div>
        </Stack>

        <Fragment key={location.search}>
          {articles
            .filter(
              (article) =>
                !selectedCategory || article.category === selectedCategory
            )
            .map((article) => (
              <Stack
                data-aos={`fade`}
                data-aos-offset={100}
                gap={`0.5rem`}
                id={article.slug}
                key={article.slug}
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
                  {article.category && (
                    <CategoryPills categories={[article.category]} />
                  )}
                </div>

                {article.title && (
                  <h3>
                    <Link
                      css={css`
                        color: ${({ theme }) => theme.palette.light[1]};
                      `}
                      to={`/${article.slug}#top`}
                    >
                      {article.title}
                    </Link>
                  </h3>
                )}

                {article.quote && (
                  <Link
                    css={css`
                      color: ${({ theme }) => theme.palette.light[1]};
                    `}
                    to={`/${article.slug}#top`}
                  >
                    <blockquote>
                      <q>{article.quote}</q>
                    </blockquote>
                  </Link>
                )}

                <Link to={`/${article.slug}#top`}>
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
                  <Link to={`/${article.slug}#top`}>Read more ❯</Link>
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
