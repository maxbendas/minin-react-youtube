import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
          <Navbar/>
            <div className="container mt-4">
                <Switch>
                    <Route component={Home} path='/' exact/>
                    <Route component={About} path='/about'/>
                </Switch>
            </div>
        </BrowserRouter>

);
}

export default App;
