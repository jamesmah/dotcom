import Container from "../components/elements/Container"

const ComingSoon = () => (
  <Container
    css={`
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      padding-bottom: 5rem;
    `}
  >
    <h1 data-aos={`fade-up`}>Coming Soon...</h1>
  </Container>
)

export default ComingSoon
