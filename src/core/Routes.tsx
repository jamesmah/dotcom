import { lazy, useEffect } from "react"
import ReactGA from "react-ga"
import { Route, Switch, useHistory, useLocation } from "react-router-dom"
import Article from "../pages/Article"
import Blog from "../pages/Blog"
import Drafts from "../pages/Drafts"

const Quotes = lazy(() => import(`../pages/Quotes`))
const ComingSoon = lazy(() => import(`../pages/ComingSoon`))
const Credits = lazy(() => import(`../pages/Credits`))
const PageNotFound = lazy(() => import(`../pages/PageNotFound`))

const Routes = () => {
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (process.env.NODE_ENV === `production`) {
      ReactGA.pageview(location.pathname + location.search)
    }
  }, [location])

  useEffect(() => {
    if (location.hash.slice(1) === `top`) {
      window.scrollTo(0, 0)
      history.replace(`${location.pathname}${location.search}`)
    }
  }, [location.hash])

  return (
    <Switch>
      <Route component={Blog} exact path={`/`} />
      <Route component={Blog} exact path={`/blog`} />
      <Route component={Drafts} exact path={`/drafts`} />
      <Route component={Quotes} exact path={`/quotes`} />
      <Route component={ComingSoon} exact path={`/about`} />
      <Route component={ComingSoon} exact path={`/projects`} />
      <Route component={Credits} exact path={`/credits`} />
      <Route component={Article} exact path={`/:id`} />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default Routes
