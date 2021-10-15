import { Suspense } from "react"
import { RouteComponentProps } from "react-router"
import Container from "../components/elements/Container"
import Stack from "../components/elements/Stack"
import BackHeader from "../components/molecules/BackHeader"
import TagPills from "../components/molecules/TagPills"
import Footer from "../components/sections/Footer"
import allArticles from "../content/allArticles"
import PageNotFound from "./PageNotFound"

const Article = ({ match }: RouteComponentProps<{ id: string }>) => {
  const data = allArticles.find((q) => q.slug === match.params.id)
  if (!data?.Page) return <PageNotFound />
  const { Page } = data

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
            <div data-aos={`fade`}>{data.timeStamp.toDateString()}</div>
            <TagPills tags={data.tags} />
          </div>
          {data.title && <h3 data-aos={`fade`}>{data.title}</h3>}

          <Suspense fallback={null}>
            <Page />
          </Suspense>
        </Stack>
      </Container>
      <Footer width={`md`} />
    </>
  )
}

export default Article
