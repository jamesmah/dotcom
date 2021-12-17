import "./Hamburger.scss"
import classNames from "classnames"

const Hamburger = ({
  toggleIsActive,
  isActive,
}: {
  toggleIsActive: () => void
  isActive: boolean
} & React.HTMLProps<HTMLButtonElement>) => (
  <button
    className={classNames(`hamburger`, isActive && `is-active`)}
    onClick={toggleIsActive}
    type={`button`}
  >
    <span className={`hamburger-box`}>
      <span className={`hamburger-inner`}></span>
    </span>
  </button>
)

export default Hamburger
