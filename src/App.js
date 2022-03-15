import { Switch, Route } from 'react-router-dom';
import Admin from './routes/admin/Admin';
import Home from './routes/home/Home';


function App() {
  return (
    <>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/admin" component={Admin} />
      </Switch>
    </>
  );
}

export default App;