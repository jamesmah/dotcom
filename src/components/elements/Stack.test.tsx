import { render, screen } from "@testing-library/react"
import Stack from "./Stack"

test(`should render children`, () => {
  render(<Stack>Test</Stack>)
  screen.getByText(`Test`)
})
