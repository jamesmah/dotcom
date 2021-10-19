import "./Hamburger.scss"
import classNames from "classnames"

const Hamburger = ({
  toggleIsActive,
  isActive,
  ...props
}: {
  toggleIsActive: () => void
  isActive: boolean
} & React.HTMLProps<HTMLButtonElement>) => (
  <button
    {...props}
    className={classNames(
      `hamburger hamburger--collapse`,
      isActive && `is-active`,
      props.className
    )}
    css={`
      padding: 0.5rem;
      margin: -0.5rem;

      :hover {
        opacity: 0.6 !important;
      }
    `}
    onClick={toggleIsActive}
    type={`button`}
  >
    <span className={`hamburger-box`}>
      <span className={`hamburger-inner`}></span>
    </span>
  </button>
)

export default Hamburger
