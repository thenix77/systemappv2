export const msalConfig = {
  auth: {
    clientId: "65852916-64f4-480a-936a-3d94aa94f32a",
    authority: "https://login.microsoftonline.com/b4a40545-7779-4b38-aff7-1f1738f80840",
    redirectUri: "https://www.gcabana.com",
   },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
};