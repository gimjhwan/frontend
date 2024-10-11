import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Preview from "./Preview";
// css
import GlobalStyle from "@styles/globalStyle";
import { theme } from "@styles/theme";
import { ThemeProvider } from "styled-components";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Preview />
    </ThemeProvider>
  </StrictMode>
);
