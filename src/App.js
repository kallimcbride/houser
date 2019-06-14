import React from 'react';
import routes from './routes/routes'
import Header from './components/Header/Header'
import { HashRouter as Router } from 'react-router-dom';
import './App.css'

function App() {
  return (
  <Router>
   <div className="App">
      <Header>Header</Header>
      {routes}
    </div>
   </Router>
  );
}

export default App;
