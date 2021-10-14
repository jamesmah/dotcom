import Container from "../elements/Container"

const Footer = () => {
  return (
    <Container
      as="footer"
      css={`
        padding: 3rem 0 2rem;
        text-align: center;
      `}
    >
      <div data-aos="fade-up" data-aos-offset="32" data-aos-once={false}>
        I ❤️ Buer Buer
      </div>
    </Container>
  )
}

export default Footer
