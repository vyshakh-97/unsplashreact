import React from "react";
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from "./screens/Home";

import {ImageContextProvider}  from './context/Contextprovider';
import Image from "./screens/Image";
function App() {
  
  return (
    <ImageContextProvider>
    <BrowserRouter>
        <Switch>
         <Route path="/" exact>
        <Home />
        </Route>  
       <Route path="/images" exact>
        <Image />
        </Route>
        </Switch> 
        </BrowserRouter>
    </ImageContextProvider>
    )
}
export default App;
