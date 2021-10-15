import queryString from "query-string"
import { Fragment } from "react"
import { Link, RouteComponentProps } from "react-router-dom"
import { css } from "styled-components"
import Container from "../components/elements/Container"
import Image from "../components/elements/Image"
import Stack from "../components/elements/Stack"
import TagPills from "../components/molecules/TagPills"
import Footer from "../components/sections/Footer"
import allArticles from "../content/allArticles"
import { tags } from "../types"

const Blog = ({ location }: RouteComponentProps) => {
  const parsed = queryString.parse(location.search, {
    arrayFormat: `comma`,
  })

  const showDrafts = parsed.draft || parsed.draft === null
  const tagsFilter =
    typeof parsed.tags === `string` ? [parsed.tags] : parsed.tags

  return (
    <>
      <Container
        $width={`md`}
        css={`
          padding-top: 1rem;
        `}
      >
        <Stack gap={`5rem`}>
          <Stack gap={`1rem`}>
            <h1 data-aos={`fade`}>
              {tagsFilter ? tagsFilter.join(`, `) : `All Articles`}
            </h1>

            <div
              css={css`
                display: flex;
                gap: 1rem;
                color: ${({ theme }) => theme.palette.light[2]};
                flex-wrap: wrap;

                > a {
                  color: ${({ theme }) => theme.palette.light[3]};

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
                className={!tagsFilter ? `active` : undefined}
                to={queryString.stringifyUrl(
                  {
                    url: location.pathname,
                    query: { ...parsed, tags: undefined },
                  },
                  {
                    arrayFormat: `comma`,
                  }
                )}
                data-aos={`fade-left`}
              >
                All
              </Link>
              {tags.map((tag, index) => (
                <Fragment key={tag}>
                  <div
                    data-aos={`fade-left`}
                    data-aos-delay={(index * 2 + 1) * 50}
                  >
                    |
                  </div>
                  <Link
                    data-aos={`fade-left`}
                    data-aos-delay={(index + 1) * 2 * 50}
                    className={tagsFilter?.includes(tag) ? `active` : undefined}
                    to={queryString.stringifyUrl(
                      {
                        url: location.pathname,
                        query: { ...parsed, tags: [tag] },
                      },
                      {
                        arrayFormat: `comma`,
                      }
                    )}
                  >
                    {tag}
                  </Link>
                </Fragment>
              ))}
            </div>
          </Stack>

          {allArticles
            .filter(
              (p) =>
                (showDrafts || !p.draft) &&
                (!tagsFilter || p.tags.some((tag) => tagsFilter.includes(tag)))
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
                  <div>{article.timeStamp.toDateString()}</div>
                  <TagPills
                    tags={[
                      ...(article.draft ? [`draft`] : []),
                      ...article.tags,
                    ]}
                  />
                </div>

                {article.title && (
                  <h3>
                    <Link to={`article/${article.slug}#top`}>
                      {article.title}
                    </Link>
                  </h3>
                )}

                {article.quote && (
                  <Link to={`article/${article.slug}#top`}>
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
                <Link
                  to={`article/${article.slug}#top`}
                  data-aos={`fade-left`}
                  data-aos-offset={0}
                >
                  Read more ❯
                </Link>
              </Stack>
            ))}
        </Stack>
      </Container>
      <Footer />
    </>
  )
}

export default Blog
