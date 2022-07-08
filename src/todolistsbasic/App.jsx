
///////////////////////////////////////making TODOLISTs/////////////////
import React from 'react'
import Listpage from './Listpage'
import "../index.css"
import {Link, Route, Switch, Redirect} from "react-router-dom";

const App=()=>{
   return (
     <>
         <Link to="/:title"></Link>
         <Switch>
           <Route exact path="/:title" component={Listpage} />
           <Redirect to="/ToDoList" />
         </Switch>
     </>
   );    


}

export default App;