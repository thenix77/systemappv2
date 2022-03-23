import React from "react";

import { useIsAuthenticated } from "@azure/msal-react"
import { NavbarMain } from "./NavbarMain"


/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props:any) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <NavbarMain />
            <div className="row">
                <div className="col-12">
                    <h5 style={{textAlign:'center'}} className='title'>
                        Bienvenido a la Autentificacion Microsoft para React
                    </h5>
                </div>
                <div className="col-12">
                    {props.children}
                </div>
            </div>
            
        </>
    )
}
