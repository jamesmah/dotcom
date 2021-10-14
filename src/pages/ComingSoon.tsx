import Container from "../components/elements/Container"

const ComingSoon = () => {
  return (
    <Container
      css={`
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      `}
    >
      <h1 data-aos="fade-up">Coming Soon...</h1>
    </Container>
  )
}

export default ComingSoon
