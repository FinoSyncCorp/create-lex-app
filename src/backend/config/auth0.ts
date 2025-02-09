export const authConfig = {
    domain: import.meta.env.VITE_AUTH0_DOMAIN as string,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID as string,
    audience: import.meta.env.VITE_AUTH0_AUDIENCE as string,
    scope: "openid profile email read:roles",
    authorizationParams: {
      redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
    },
    connections: {
      lexAuth: "Username-Password-Authentication", // Lex Auth Custom Login
      google: "google-oauth2", // Google OAuth Login
    },
  };
  