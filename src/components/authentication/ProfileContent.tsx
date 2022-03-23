import React, { Fragment, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../config/authConfig";
import Button from "react-bootstrap/Button";
import ProfileData from "./ProfileData";
import { callMsGraph } from "../../config/graph";


export default function ProfileContent() {
    const { instance, accounts, inProgress } = useMsal()
    const [accessToken, setAccessToken] = useState(null)

    const [graphData, setGraphData] = useState(null)

    const name = accounts[0] && accounts[0].name;

    function RequestAccessToken() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request)
          .then((response:any) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response))
          })
          .catch((e) => {
              instance.acquireTokenPopup(request).then((response:any) => {
                  setAccessToken(response.accessToken);
              });
          })
    }

  return (
      <>
         <h5 className="card-title">Welcome { name}</h5>
        {
          (graphData)?
            <ProfileData graphData={graphData} />
          :
            <Button variant="secondary" onClick={RequestAccessToken}> - Respuesta de Token </Button>
        }
      </>
  )
}