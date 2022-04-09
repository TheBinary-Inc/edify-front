import { Switch, Route } from 'react-router-dom';
import Admin from './routes/admin/Admin';
import Login from './routes/auth/Login';
import Home from './routes/home/Home';
import PrivateRoute from './routes/private/PrivateRoute';

function App() {
  return (
    <>
      <Switch>
          <Route exact path="/" component={Home}/>
          <PrivateRoute path="/admin" component={Admin}/>
          <Route path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;