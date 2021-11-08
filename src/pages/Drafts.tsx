import { Fragment } from "react"
import { Link, RouteComponentProps } from "react-router-dom"
import { css } from "styled-components"
import Container from "../components/elements/Container"
import Image from "../components/elements/Image"
import Stack from "../components/elements/Stack"
import TagPills from "../components/molecules/TagPills"
import { allDrafts } from "../content/allArticles"

const Drafts = ({ location }: RouteComponentProps) => (
  <Container
    $width={`md`}
    css={`
      padding-top: 1rem;
    `}
  >
    <Stack gap={`5rem`}>
      <Fragment key={location.search}>
        {allDrafts.map((article) => (
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

export default Drafts
