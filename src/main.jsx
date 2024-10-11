import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// css
import GlobalStyle from "@styles/globalStyle.js";
import { theme } from "@styles/theme.js";
import { ThemeProvider } from "styled-components";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
