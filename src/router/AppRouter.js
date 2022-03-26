import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from '../pages/Login/Login'
import Workspace from '../pages/Workspace/Workspace'


const AppRouter = () => {
  return (
    <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/detail" component={Workspace} />
            </Switch>
        </Router>
  )
}

export default AppRouter