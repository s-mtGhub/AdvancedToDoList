//[todolistsbasic] toDolists Basic///////////////////////////////////////////////////////
import React from "react";
import ReactDom from "react-dom";
import App from "./todolistsbasic/App";
import { HashRouter as Router } from "react-router-dom";

ReactDom.render(
  <React.StrictMode>
    <Router >
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
/////////////////////////////////////////////////////////////////////////////////////////

/*
//[todolistsCutLine] toDolists using cut-lines////////////////////////////////////////////
import React from 'react'
import ReactDom from 'react-dom'
import App from './todolistsCutLine/App'  

ReactDom.render(<App />,document.getElementById('root'));
*/
//////////////////////////////////////////////////////////////////////////////////////////
