import Container from "../components/elements/Container"

const PageNotFound = () => (
  <Container
    css={`
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    `}
    data-aos={`fade-up`}
  >
    <h1>404</h1>
    <p>Page not found</p>
  </Container>
)

export default PageNotFound
