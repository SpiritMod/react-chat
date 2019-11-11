import React from 'react';
import { Route } from "react-router-dom";

import { Auth, Home } from 'pages';

function App() {
  return (
    <div className="wrapper">
      <Route path={['/', '/register', '/login']} exact component={ Auth } />
      <Route path={['/im']} exact component={ Home } />
    </div>
  );
}

export default App;
