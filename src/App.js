import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import {AlertState} from "./context/alert/AlertState";
import Alert from "./components/Alert";
import {FirebaseState} from "./context/firebase/FirebaseState";

function App() {
    return (
        <FirebaseState>
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container mt-4">
                        <Alert/>
                        <Switch>
                            <Route component={Home} path='/' exact/>
                            <Route component={About} path='/about'/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </FirebaseState>
    );
}

export default App;
