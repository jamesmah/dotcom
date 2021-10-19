import { lazy, useEffect } from "react"
import { Route, Switch, useHistory, useLocation } from "react-router-dom"
import Article from "../pages/Article"
import Blog from "../pages/Blog"

const Home = lazy(() => import(`../pages/Home`))
const ComingSoon = lazy(() => import(`../pages/ComingSoon`))
const Credits = lazy(() => import(`../pages/Credits`))
const PageNotFound = lazy(() => import(`../pages/PageNotFound`))

const Routes = () => {
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (location.hash.slice(1) === `top`) {
      window.scrollTo(0, 0)
      history.replace(`${location.pathname}${location.search}`)
    }
  }, [location.hash])

  return (
    <Switch>
      <Route component={Home} exact path={`/`} />
      <Route component={Blog} exact path={`/blog`} />
      <Route component={Article} exact path={`/article/:id`} />
      <Route component={ComingSoon} exact path={`/about`} />
      <Route component={Credits} exact path={`/credits`} />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default Routes
