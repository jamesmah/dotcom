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
            css={`
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 5rem;
            `}
            data-aos={`fade`}
          >
            <Link
              css={css`
                padding: 0.5rem;
                margin: -0.5rem;
                font-size: 1.5rem;
                font-weight: 600;
                color: ${({ theme }) => theme.palette.light[1]};
              `}
              to={`/#top`}
            >
              JM
            </Link>
            <Hamburger isActive={isActive} toggleIsActive={toggleIsActive} />
          </Container>
        </div>
      </header>
      {isActive && (
        <nav
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
            display: grid;
            place-items: center;
          `}
          data-aos={`fade-down`}
          data-aos-duration={`300`}
          onClick={toggleIsActive}
        >
          <Stack
            css={`
              text-align: center;
              padding-bottom: 4rem;
            `}
            gap={`0.5rem`}
          >
            <div>Links</div>
            <Stack as={`ul`} className={`list-reset`}>
              <li>
                <StyledLink to={`/#top`}>Blog</StyledLink>
              </li>
              <li>
                <StyledLink to={`/about#top`}>About</StyledLink>
              </li>
              <li>
                <StyledLink to={`/credits#top`}>Credits</StyledLink>
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
  display: block;
  padding: 0.5rem;
`

export default Header
