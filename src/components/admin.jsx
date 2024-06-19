import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PostsContainer from "./post";

const Admin = () => {

    return(
        <>
        <h4>Welcome TO ADMIN PAGE</h4>
        <div>
            <Routes>
                <Route path="/post" element={<PostsContainer/>}></Route>
            </Routes>
        </div>
        </>
    );
};

export default Admin;