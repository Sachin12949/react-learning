import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <>
<nav>
                    <ul>
                        <li>
                            <Link to="/">
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/post">
                            Admin-Post
                            </Link>
                        </li>
                        <li>
                            <Link to="/stopwatch">
                            Stopwatch
                            </Link>
                        </li>
                        <li>
                            <Link to="/userData">
                            userData
                            </Link>
                        </li>
                        <li>
                            <Link to="/post">
                            Postcontainer
                            </Link>
                        </li>
                    </ul>
                </nav>
        </>
    )
}

export default NavBar;