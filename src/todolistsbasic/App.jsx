
///////////////////////////////////////making TODOLISTs/////////////////
import React from 'react'
import Listpage from './Listpage'
import "../index.css"
import {Link,BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

const App=()=>{
   return(
    <>
     <Router>
       <Link to="/"></Link>
        <Switch>
            <Route exact path="/:title" component={Listpage} /> 
             <Redirect to="/ToDoList" />
        </Switch>
     </Router>
    </>
   )    


}

export default App;