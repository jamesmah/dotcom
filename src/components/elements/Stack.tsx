import { Property } from "csstype"
import styled from "styled-components"

const Stack = styled.div<{
  direction?: Property.FlexDirection
  gap?: Property.Gap
}>`
  display: flex !important;
  flex-direction: ${({ direction }) => direction || `column`} !important;
  gap: ${({ gap }) => gap} !important;
`

export default Stack
