import Stack from "../components/elements/Stack"
import Quote from "../components/molecules/Quote"
import Footer from "../components/sections/Footer"
import allQuotes from "../content/quotes/allQuotes"

const Home = () => {
  return (
    <>
      <Stack gap="2rem">
        {allQuotes.map((quote, index) => (
          <Quote
            key={quote.slug}
            textAlign={index % 2 === 0 ? `right` : `left`}
            data={quote}
          />
        ))}
      </Stack>
      <Footer />
    </>
  )
}

export default Home
