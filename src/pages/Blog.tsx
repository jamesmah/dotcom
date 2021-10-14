import chroma from "chroma-js"
import { Link } from "react-router-dom"
import { css } from "styled-components"
import Container from "../components/elements/Container"
import Stack from "../components/elements/Stack"
import allBlogPosts from "../content/blogPosts/allBlogPosts"

const Blog = () => {
  return (
    <Container
      $width="md"
      css={`
        padding: 1rem 0 4rem;
      `}
    >
      <Stack gap="5rem">
        <h1>All Posts</h1>
        {allBlogPosts.map((post) => {
          const { Excerpt } = post
          return (
            <Stack gap="0.5rem" key={post.slug} data-aos="fade">
              <div
                css={`
                  display: flex;
                  justify-content: space-between;
                `}
              >
                <div>{post.timeStamp.toDateString()}</div>
                <Stack direction="row" gap="1rem">
                  {post.tags.map((tag, index, array) => (
                    <div
                      data-aos="fade-right"
                      data-aos-delay={(array.length - index - 1) * 100}
                      key={tag}
                      css={css`
                        color: ${({ theme }) => theme.palette.light[2]};
                        background: ${({ theme }) =>
                          chroma(theme.palette.dark[3]).alpha(0.8).hex()};
                        font-size: 0.75rem;
                        padding: 0.125rem 0.375rem;
                        border-radius: 0.5rem;
                        text-transform: uppercase;
                        font-weight: 600;
                      `}
                    >
                      {tag}
                    </div>
                  ))}
                </Stack>
              </div>

              <h3>
                <Link to={`blog/${post.slug}`}>{post.title}</Link>
              </h3>

              <Link to={`blog/${post.slug}`}>
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
                    <img
                      css={`
                        width: 100%;
                      `}
                      src={post.thumbnail}
                      alt="thumbnail"
                    />
                  </div>
                </div>
              </Link>

              <div>
                <Excerpt />
              </div>
              <Link to={`blog/${post.slug}`}>Read more {`❯`}</Link>
            </Stack>
          )
        })}
      </Stack>
    </Container>
  )
}

export default Blog
