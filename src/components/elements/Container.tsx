import styled from "styled-components"
import { Breakpoint } from "../../theme"
import { mq } from "../../utils/media-query"

const Container = styled.div<{ $width?: Breakpoint }>`
  width: 100% !important;
  max-width: ${({ theme, $width = `lg` }) =>
    theme.breakpoints[$width]}px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  padding-left: 1rem !important;
  padding-right: 1rem !important;

  ${mq.up(`sm`)} {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
  }
`

export default Container
