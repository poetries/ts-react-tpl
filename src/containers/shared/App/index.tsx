import * as React from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */'@views/Home'),
    loading: () => <div>Home Loading...</div>
})

const Page = Loadable({
    loader: () => import(/* webpackChunkName: "page" */'@views/Page'),
    loading: () => <div>Page Loading...</div>
})

@hot(module)
class App extends React.Component {
    render() {
        return <Router>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/page" component={Page} />
            </Switch>
        </Router>
    }
}

export default App