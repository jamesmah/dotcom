import React from "react"

const BlockQuote = ({
  quote,
  originator,
}: {
  quote: React.ReactNode
  originator: string
}) => (
  <blockquote data-aos={`fade-right`}>
    <q>{quote}</q>
    <span
      css={`
        white-space: nowrap;
      `}
    >
      {originator && ` - ${originator}`}
    </span>
  </blockquote>
)

export default BlockQuote
