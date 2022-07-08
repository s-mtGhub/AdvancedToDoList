

//[todolistsbasic] toDolists Basic///////////////////////////////////////////////////////
import React from 'react'
import ReactDom from 'react-dom'
import App from './todolistsbasic/App'  
import {BrowserRouter as Router} from "react-router-dom"
ReactDom.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,
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

