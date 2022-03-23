import React from "react"
import { useMsal } from "@azure/msal-react"
import { loginRequest } from "../../config/authConfig"

import { Button } from "react-bootstrap"


/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {

    const { instance } = useMsal()

    function handleLogin(instance:any) {
        instance.loginPopup(loginRequest).catch((e:any) => {
            console.error(e)
        });
    }

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleLogin(instance)}>Sign in using Popup</Button>
    );
}