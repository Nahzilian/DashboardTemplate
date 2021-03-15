import React, { useState } from 'react';
import './components/assets/stylesheets/App.css';
import Homepage from './components/Homepage/Homepage';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Auth/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';



function App() {
  const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/login' component={Login}/>
        {/* <ProtectedRoute path="/dashboard" component={Dashboard} isAuth={auth}/> */}
        <Route path='/' component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
