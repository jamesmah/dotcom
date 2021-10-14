import chroma from "chroma-js"
import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import styled, { css } from "styled-components"
import { useToggle } from "../../hooks/useToggle"
import Container from "../elements/Container"
import Hamburger from "../elements/Hamburger"
import Stack from "../elements/Stack"

const Header = () => {
  const [isActive, toggleIsActive] = useToggle()
  const location = useLocation()

  useEffect(() => {
    isActive && window.scrollTo({ top: 0, behavior: `smooth` })
  }, [isActive])

  useEffect(() => {
    isActive && toggleIsActive()
  }, [location])

  return (
    <>
      <header
        css={`
          position: relative;
          height: 5rem;
        `}
      >
        <div
          css={`
            position: ${isActive ? `fixed` : `absolute`};
            z-index: 1000;
            top: 0;
            width: 100%;
          `}
        >
          <Container
            data-aos="fade"
            css={`
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 5rem;
            `}
          >
            <Link
              to="/"
              css={`
                padding: 0.5rem;
                margin: -0.5rem;
              `}
            >
              <img src="/logo.png" alt="JM" width={32} height={32} />
            </Link>
            <Hamburger toggleIsActive={toggleIsActive} isActive={isActive} />
          </Container>
        </div>
      </header>
      {isActive && (
        <nav
          data-aos="fade-down"
          data-aos-duration="300"
          css={css`
            position: fixed;
            top: 0;
            bottom: -20vh;
            padding-top: 5rem;
            padding-bottom: 20vh;
            width: 100%;
            z-index: 999;
            background: ${({ theme }) =>
              chroma(theme.palette.dark[1]).alpha(0.97).hex()};
            display: flex;
            place-items: center;
            justify-content: center;
          `}
        >
          <Stack
            gap="1rem"
            css={`
              text-align: center;
              padding-bottom: 4rem;
            `}
          >
            <div>Links</div>
            <Stack as="ul" gap="1rem" className="list-reset">
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/blog">Blog</StyledLink>
              </li>
              <li>
                <StyledLink to="/about">About</StyledLink>
              </li>
              <li>
                <StyledLink to="/credits">Credits</StyledLink>
              </li>
            </Stack>
          </Stack>
        </nav>
      )}
    </>
  )
}

const StyledLink = styled(Link)`
  font-size: 1.5rem;
`

export default Header
