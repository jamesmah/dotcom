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
    onClick={toggleIsActive}
    className={classNames(
      `hamburger hamburger--collapse`,
      isActive && `is-active`,
      props.className
    )}
    type="button"
    css={`
      padding: 0.5rem;
      margin: -0.5rem;
    `}
  >
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </button>
)

export default Hamburger
