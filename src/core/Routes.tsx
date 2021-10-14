import { lazy } from "react"
import { Route, Switch } from "react-router-dom"
import Blog from "../pages/Blog"
import BlogPost from "../pages/BlogPost"

const Home = lazy(() => import(`../pages/Home`))
const ComingSoon = lazy(() => import(`../pages/ComingSoon`))
const Credits = lazy(() => import(`../pages/Credits`))
const PageNotFound = lazy(() => import(`../pages/PageNotFound`))
const Quote = lazy(() => import(`../pages/Quote`))

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/blog/:id" exact component={BlogPost} />
      <Route path="/about" exact component={ComingSoon} />
      <Route path="/credits" exact component={Credits} />
      <Route path="/quotes/:id" exact component={Quote} />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default Routes
