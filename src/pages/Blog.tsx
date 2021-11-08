import queryString from "query-string"
import { Fragment } from "react"
import { Link, RouteComponentProps } from "react-router-dom"
import { css } from "styled-components"
import Container from "../components/elements/Container"
import Image from "../components/elements/Image"
import Stack from "../components/elements/Stack"
import TagPills from "../components/molecules/TagPills"
import allArticles, { allDrafts } from "../content/allArticles"
import { Tag } from "../types"
import { fadeLeftAnimation } from "../utils/keyframes"

const Blog = ({ location }: RouteComponentProps) => {
  const parsed = queryString.parse(location.search)
  const selectedTagKey = typeof parsed.tag === `string` ? parsed.tag : undefined

  const articles =
    `draft` in parsed
      ? allDrafts.concat(allArticles)
      : allArticles.filter((a) => !a.tags.includes(Tag.WIP))

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
              to={queryString.stringifyUrl(
                {
                  url: location.pathname,
                  query: { ...parsed, tag: undefined },
                },
                {
                  arrayFormat: `comma`,
                }
              )}
            >
              All
            </Link>
            {Object.entries(Tag)
              .filter(([_, tag]) => tag !== Tag.WIP)
              .map(([tagKey, tag], index) => (
                <Fragment key={tagKey}>
                  <div
                    css={`
                      opacity: 0;
                      animation: ${fadeLeftAnimation} 1s ease
                        ${(index * 2 + 1) * 50}ms forwards;
                    `}
                  >
                    |
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
          {articles
            .filter(
              (article) =>
                !selectedTagKey ||
                (typeof selectedTagKey === `string` &&
                  article.tags.some(
                    (tag) => tag === Tag[selectedTagKey as keyof typeof Tag]
                  ))
            )
            .map((article) => (
              <Stack
                data-aos={`fade`}
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
                  <TagPills tags={article.tags} />
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
