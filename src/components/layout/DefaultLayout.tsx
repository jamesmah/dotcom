import Stack from "../elements/Stack"
import Header from "../sections/Header"
import SVGBackground from "./layout-background.svg"

const DefaultLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Stack
      css={`
        flex-grow: 1;
        position: relative;

        ::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100%;
          background-image: url(${SVGBackground});
          background-repeat: no-repeat;
          background-position: top;
          pointer-events: none;
        }
      `}
    >
      <Header />
      <Stack
        css={`
          flex-grow: 1;
          padding-bottom: 5rem;
        `}
      >
        {children}
      </Stack>
    </Stack>
  )
}

export default DefaultLayout
