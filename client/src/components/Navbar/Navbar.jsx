import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
    return(
        <div>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Nav bar</title>
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.6/css/unicons.css"></link>
                <link rel="stylesheet" href="./Navbar.css" />
            </head>
            <body>
                <nav>
                    <div className="navbar">
                        <h2 class="log">
                            Social Name
                        </h2>
                        <div className="search_bar">
                            <i class="uil uil-search"></i>
                            <input type="search" placeholder="search" />
                        </div>
                        <div className="nav-left">
                            <input id="marginBottom" className="btn btn-primary" type="button" value="Create" />
                            <div className="profile-pic">
                                <img src="/assets/person/1.png" alt="profile picture" />
                            </div>
                        </div>
                    </div>
                </nav>
            </body>
            </html>
        </div>
    )
}

export default Navbar;