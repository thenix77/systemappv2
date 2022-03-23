import React from "react"
import { useMsal } from "@azure/msal-react"


function handleLogout(instance:any) {
    instance.logoutPopup().catch((e:any) => {
        console.error(e)
    });
}

/**
 * Renders a button which, when selected, will open a popup for logout
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    return (
        <button className="btn btn-outline-secondary ml-auto" onClick={() => handleLogout(instance)}> 
            <i className="fa fa-sign-out" aria-hidden="true"></i> salir
        </button>
    )
}