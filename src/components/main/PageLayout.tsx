import React from "react";
import Navbar from "react-bootstrap/Navbar"
import { useIsAuthenticated } from "@azure/msal-react"
import { SignInButton } from "../authentication/SignInButton";
import { SignOutButton } from "../authentication/SignOutButton";




/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props:any) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" >MSAL Ingreso al sistema </a>
                { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
            </Navbar>
            <h5 style={{textAlign:'center'}}>
              Bienvenido a la Autentificacion Microsoft para React
            </h5>
            <br />
            <br />
            {props.children}
        </>
    )
}
