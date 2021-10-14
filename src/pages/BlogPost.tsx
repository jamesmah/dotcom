import { RouteComponentProps } from "react-router"
import Container from "../components/elements/Container"
import BackHeader from "../components/molecules/BackHeader"
import allBlogPosts from "../content/blogPosts/allBlogPosts"
import PageNotFound from "./PageNotFound"

const BlogPost = ({ match }: RouteComponentProps<{ id: string }>) => {
  const quote = allBlogPosts.find((q) => q.slug === match.params.id)

  if (!quote?.Page) return <PageNotFound />
  const { Page } = quote

  return (
    <>
      <BackHeader width="md" />
      <Container
        $width="md"
        css={`
          padding-bottom: 4rem;
        `}
      >
        <Page />
      </Container>
    </>
  )
}

export default BlogPost
