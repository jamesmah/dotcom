import * as styled from "styled-components"
import { mq } from "../utils/media-query"

const GlobalStyle = styled.createGlobalStyle`
  html,
  body {
    overflow-x: hidden;
  }

  html {
    height: fill-available;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-height: fill-available;
    background: ${({ theme }) => theme.palette.dark[1]};
    color: ${({ theme }) => theme.palette.light[1]};
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    line-height: 1.3;

    * {
      transition: all 0.2s;
    }
  }

  #root {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  img,
  svg,
  video {
    display: block;
    height: auto;
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.palette.light[1]};
  }

  h1,
  .h1 {
    font-size: 1.75rem;
  }

  h2,
  .h2 {
    font-size: 1.625rem;
  }

  h3,
  .h3 {
    font-size: 1.5rem;
  }

  h4,
  .h4 {
    font-size: 1.375rem;
  }

  h5,
  .h5 {
    font-size: 1.25rem;
  }

  h6,
  .h6 {
    font-size: 1.125rem;
  }

  blockquote {
    font-size: 1.25rem;

    ${mq.down(`sm`)} {
      margin-left: 32px;
      margin-right: 32px;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.light[2]};

    :hover {
      color: ${({ theme }) => theme.palette.light[3]};
    }
  }

  code {
    font-size: 0.875rem;
    padding: 0.125rem;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.palette.dark[3]};
  }

  ul,
  ol {
    margin: 0;
  }

  .list-reset {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0;
    }
  }

  .button-reset {
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0;
    cursor: pointer;
    color: inherit;
  }
`
export default GlobalStyle
