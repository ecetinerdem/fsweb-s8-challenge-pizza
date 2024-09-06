import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import OrderForm from './components/OrderForm';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/orderform" component={OrderForm} />
      </Switch>
    </Router>
  );
}

export default App;

