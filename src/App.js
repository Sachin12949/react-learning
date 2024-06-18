// Filename - App.js

import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Stopwatch from "./components/stopWatch";
import FetchApi from "./components/userData";

class App extends Component {
    render() {
        return (
            <>
            <Home/>
            </>
        );
    }
}

export default App;
