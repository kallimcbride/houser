import React from 'react';
import routes from './routes/routes'
import Header from './components/Header/Header'
import House from './components/House/House'
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
  <Router>
   <div className="App">
      <Header>Header</Header>
      <House></House>
      {routes}
    </div>
   </Router>
  );
}

export default App;
