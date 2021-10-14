import chroma from "chroma-js"
import { useState } from "react"
import LazyLoad from "react-lazyload"
import { Link } from "react-router-dom"
import { css } from "styled-components"
import { QuoteData } from "../../types"
import { mq } from "../../utils/media-query"
import Container from "../elements/Container"

const Quote = ({
  textAlign = `left`,
  data,
}: {
  textAlign: "left" | "right"
  data: QuoteData
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const textAlignOpposite = textAlign === `left` ? `right` : `left`

  return (
    <Container>
      <div
        css={css`
          position: relative;
          padding-top: min(calc(9 / 16 * 100%), calc(100vh - 6rem));

          ${mq.vertical} {
            padding-top: min(100%, calc(100vh - 6rem));
          }
        `}
      >
        <LazyLoad
          once
          css={`
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
          `}
        >
          <img
            src={data.image}
            alt="hidden"
            css={`
              display: none;
            `}
            onLoad={() => setImageLoaded(true)}
          />
          {imageLoaded && (
            <>
              <div
                data-aos={`fade-${textAlign}`}
                css={css`
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  width: 100%;
                  background-image: url(${data.image});
                  background-position: center;
                  background-repeat: no-repeat;
                  background-size: cover;
                `}
              />
              <div
                data-aos={`fade-slide-${textAlignOpposite}`}
                css={css`
                  position: absolute;
                  backdrop-filter: blur(2px);
                  background: ${({ theme }) =>
                    chroma(theme.palette.dark[2]).alpha(0.3).hex()};
                  max-height: 80%;
                  overflow: hidden;
                  bottom: 10%;
                  ${textAlign}: 0;
                  ${textAlignOpposite}: 25%;

                  ${mq.vertical} {
                    ${textAlignOpposite}: 15%;
                  }
                `}
              >
                <div
                  css={`
                    display: flex;
                    flex-direction: ${textAlign === `right` && `row-reverse`};
                    gap: 1rem;
                    ${`padding-${textAlignOpposite}`}: 1.5rem;
                  `}
                >
                  <Link
                    to={`quotes/${data.slug}`}
                    css={css`
                      padding: 1rem;
                      ${`margin-${textAlign}`}: -0.5rem;
                      display: grid;
                      place-items: center;
                      background: ${({ theme }) =>
                        chroma(theme.palette.dark[2]).alpha(0.1).hex()};
                      font-size: 1.5rem;
                      color: ${({ theme }) =>
                        chroma(theme.palette.light[1]).alpha(0.8).hex()};

                      :hover {
                        color: ${({ theme }) =>
                          chroma(theme.palette.light[1]).alpha(0.5).hex()};
                      }

                      &,
                      + p {
                        transition: transform 0.3s ease, color 0.1s;
                      }

                      :hover,
                      :hover + p {
                        transform: translateX(
                          ${textAlign === `right` ? `-` : ``}0.5rem
                        );
                      }
                    `}
                  >
                    {textAlign === `right` ? `❯` : `❮`}
                  </Link>
                  <p
                    css={css`
                      color: ${({ theme }) => theme.palette.light[1]};
                      font-weight: 600;
                      text-align: ${textAlign};
                      font-size: max(2vw, 1rem);
                      padding-top: 0.5rem;
                      padding-bottom: 0.5rem;

                      ${mq.up(`lg`)} {
                        font-size: 1.5rem;
                      }
                    `}
                  >
                    {data.quoteText}
                  </p>
                </div>
              </div>
            </>
          )}
        </LazyLoad>
      </div>
    </Container>
  )
}

export default Quote
