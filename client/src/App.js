import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notes from './pages/Notes';
import AddUpdateNote from './pages/AddUpdateNote';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route exact path="/add" component={AddUpdateNote} />
          <Route exact path="/update/:id" component={AddUpdateNote} />
          {/* Set up default/404 route, this must come last */}
          <Route render={() => <h1>💩 404 💩 404 💩</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
