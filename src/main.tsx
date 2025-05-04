import { Auth0Provider } from "@auth0/auth0-react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import store from "./store";
import { theme } from "./theme";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const audienceAPI = import.meta.env.VITE_AUTH0_BACKEND_API_AUDIENCE;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{
            redirect_uri: `${window.location.origin}/auth-callback`,
            audience: audienceAPI,
          }}
          onRedirectCallback={(appState) => {
            const targetUrl = appState?.returnTo || "/";

            window.history.replaceState(
              { returnTo: targetUrl },
              document.title,
              targetUrl
            );
          }}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
