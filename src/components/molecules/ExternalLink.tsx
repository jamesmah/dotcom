import React from "react"

const ExternalLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a href={href} rel={`noreferrer`} target={`_blank`}>
    🔗&nbsp;&nbsp;{children}
  </a>
)

export default ExternalLink
