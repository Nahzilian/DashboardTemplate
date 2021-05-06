import React, { useState } from 'react';

// Third libraries
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

// Routes
import './routes/assets/stylesheets/App.css';

function App() {
  const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);
  return (
    <Router>
      <Switch>

      </Switch>
    </Router>
  );
}

export default App;
