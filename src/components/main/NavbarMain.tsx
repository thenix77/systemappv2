import React from "react";

import { useIsAuthenticated } from "@azure/msal-react"
import { SignInButton } from "../authentication/SignInButton";
import { SignOutButton } from "../authentication/SignOutButton";
import { Link, NavLink } from "react-router-dom";

import { AuthenticatedTemplate  } from '@azure/msal-react'


/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const NavbarMain = (props:any) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="#">
                    <img src="/logo.jpg" width="30" height="30" alt="" />
                    ANALITICA
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <AuthenticatedTemplate>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="#">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Link</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link disabled" to="#">Disabled</NavLink>
                            </li>
                        </ul>
                    </AuthenticatedTemplate>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                        { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
