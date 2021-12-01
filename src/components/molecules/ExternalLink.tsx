import React from "react"

const ExternalLink = ({
  href,
  icon = `🔗`,
  children,
}: {
  href: string
  icon?: string
  children: React.ReactNode
}) => (
  <a href={href} rel={`noreferrer`} target={`_blank`}>
    {icon && <>{icon}&nbsp;</>}
    {children}
  </a>
)

export default ExternalLink
