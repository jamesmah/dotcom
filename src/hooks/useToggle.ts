import { useState } from "react"

export const useToggle = (initialState?: boolean) => {
  const [state, setState] = useState(!!initialState)
  return [state, () => setState(!state)] as const
}
