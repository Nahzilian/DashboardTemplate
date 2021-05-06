import React, { useState } from 'react';

// Third libraries
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

// Routes
import './routes/assets/stylesheets/App.css';
import Homepage from './routes/Homepage/Homepage';
import NotFound from './components/NotFound/NotFound';
import Login from './routes/Auth/Login/Login';
import Register from './routes/Register/Register';
import Dashboard from './routes/Dashboard/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute/ProtectedRoute';



function App() {
  const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <ProtectedRoute path="/dashboard" component={Dashboard} isAuth={isAuth}/>
        <Route path='/' component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
