import React from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { 
  Home, 
  Planet, 
  ErrorPage 
} from "./pages"

import 'antd/dist/antd.css';
// import "./App.css"

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/planet/:name" component={Planet} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
