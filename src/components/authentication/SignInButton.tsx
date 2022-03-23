import React from "react"
import { useMsal } from "@azure/msal-react"
import { loginRequest } from "../../config/authConfig"


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
        <button className="ml-auto btn  btn-outline-secondary text-white" onClick={() => handleLogin(instance)}>
            <i className="fa fa-sign-in" aria-hidden="true"></i> ingresar
        </button>
    );
}