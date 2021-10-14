import { RouteComponentProps } from "react-router"
import Container from "../components/elements/Container"
import BackHeader from "../components/molecules/BackHeader"
import allQuotes from "../content/quotes/allQuotes"
import PageNotFound from "./PageNotFound"

const Quote = ({ match }: RouteComponentProps<{ id: string }>) => {
  const quote = allQuotes.find((q) => q.slug === match.params.id)

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

export default Quote
