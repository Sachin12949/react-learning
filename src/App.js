// Filename - App.js

import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import "./App.css";
import Admin from "./components/admin";
import Home from "./components/home";
import NavBar from "./components/navBar";
import PostsContainer from "./components/post";
import Stopwatch from "./components/stopWatch";
import FetchApi from "./components/userData";

class App extends Component {
    render() {
        return (
            <>
            <Router>
            <NavBar/>
                <Routes>
                    <Route path="/admin/*" element={<Admin/>}></Route>
                    <Route path="/stopwatch" element={<Stopwatch/>}></Route>
                    <Route path="/post" element={<PostsContainer/>}></Route>
                    <Route path="/userData" element={<FetchApi/>}></Route>
                </Routes>
            </Router>
            </>
        );
    }
}

export default App;

{/**
/admin/dashboard
/admin/userList
/stopwatch
/userData


Routing, nested routing, navbar path, props drilling,
*/}